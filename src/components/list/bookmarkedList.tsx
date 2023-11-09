import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { BookmarkedList } from "interfaces/requestInterface/request";

import { useEffect, useState } from "react";
import BookmarkedPost from "service/bookmarkedPost";

const columns: GridColDef[] = [
  { field: "number", headerName: "Number", width: 90 },

  {
    field: "id",
    headerName: "User ID",
    width: 150,
  },
  {
    field: "content",
    headerName: "Title",
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
    field: "active",
    headerName: "Created time",
    width: 110,
  },
  {
    field: "sold",
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

const BookmarkedList = (userID: any) => {
  const [bookmarkedList, setBookmarkedList] = useState<BookmarkedList[]>([]);

  useEffect(() => {
    const getBookmarkedList = async () => {
      const data: any = await BookmarkedPost.getBookmarkedPost(userID);
      console.log(data);
      if (data.length > 0) {
        setBookmarkedList(data);
      }
    };
    const initUseEffect = async () => {
      await getBookmarkedList();
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
