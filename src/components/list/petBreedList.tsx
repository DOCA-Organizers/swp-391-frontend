import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ReportListInterface } from "interfaces/requestInterface/request";

import { useEffect, useState } from "react";
import reportPost from "service/reportPost/reportPost";

const columns: GridColDef[] = [
  { field: "number", headerName: "number", width: 90 },

  {
    field: "name",
    headerName: "name",
    width: 150,
  },
  {
    field: "age",
    headerName: "age",
    width: 150,
  },
  {
    field: "id",
    headerName: "id",
    type: "number",
    width: 110,
  },
  {
    field: "owner",
    headerName: "owner",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const PetBreedList = () => {
  const [petBreedList, setPetBreedList] = useState<ReportListInterface[]>([]);
  useEffect(() => {
    const getReportList = async () => {
      const data: any = await reportPost.getReportList();
      console.log(data);
      if (data.length > 0) {
        setPetBreedList(data);
      }
    };
    const initUseEffect = async () => {
      await getReportList();
    };
    initUseEffect();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={petBreedList.map((pet, index) => {
          return { stt: index + 1, ...pet };
        })}
        getRowId={(row) => row.id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default PetBreedList;
