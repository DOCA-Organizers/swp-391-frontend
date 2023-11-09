import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { PetItemsList } from "interfaces/requestInterface/request";
import { useEffect, useState } from "react";
import petItemsByPost from "service/petItemsByPost";

const columns: GridColDef[] = [
  { field: "number", headerName: "Number", width: 90 },

  {
    field: "name",
    headerName: "Item name",
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

const PetItemsList = (postID: any) => {
  const [petItemsList, setPetItemsList] = useState<PetItemsList[]>([]);

  useEffect(() => {
    const getPetItemsList = async () => {
      const data: any = await petItemsByPost.getPetItemsList(postID);
      console.log(data);
      if (data.length > 0) {
        setPetItemsList(data);
      }
    };
    const initUseEffect = async () => {
      await getPetItemsList();
    };
    initUseEffect();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={petItemsList.map((item, index) => {
          return { stt: index + 1, ...item };
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

export default PetItemsList;
