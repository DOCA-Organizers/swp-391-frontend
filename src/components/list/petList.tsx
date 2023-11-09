import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { PetList } from "interfaces/requestInterface/request";

import { useEffect, useState } from "react";
import petByPost from "service/petByPost";

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

const PetList = (postID: any) => {
  const [petList, setPetList] = useState<PetList[]>([]);
  useEffect(() => {
    const getPetList = async () => {
      const data: any = await petByPost.getPetList(postID);
      console.log(data);
      if (data.length > 0) {
        setPetList(data);
      }
    };
    const initUseEffect = async () => {
      await getPetList();
    };
    initUseEffect();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={petList.map((pet, index) => {
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

export default PetList;
