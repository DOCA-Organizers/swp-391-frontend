import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { BookmarkedList } from "interfaces/requestInterface/request";

import { useEffect, useState } from "react";
import reportPost from "service/reportPost/reportPost";

const columns: GridColDef[] = [
  { field: "number", headerName: "Number", width: 90 },

  {
    field: "userID",
    headerName: "User ID",
    width: 150,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "createTime",
    headerName: "Created time",
    width: 110,
  },
  {
    field: "exchange",
    headerName: "Exchange",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const BookmarkedList = () => {
  const [bookmarkedList, setBookmarkedList] = useState<BookmarkedList[]>([]);
  // chay lan dau tien
  useEffect(() => {
    const getReportList = async () => {
      const data: any = await reportPost.getReportList();
      console.log(data);
      if (data.length > 0) {
        setBookmarkedList(data);
      }
    };
    const initUseEffect = async () => {
      await getReportList();
    };
    initUseEffect();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Typography>Click in title to see detail</Typography>
      <DataGrid
        rows={bookmarkedList.map((bookmark, index) => {
          return { stt: index + 1, ...bookmark };
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

export default BookmarkedList;
