import { Box, Typography } from "@mui/material";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { USER_ID_KEY } from "constant";
import { BookmarkList } from "interfaces/requestInterface/request";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const BookmarkedList = () => {
  const [bookmarkList, setBookmarkList] = useState<BookmarkList[]>();
  
  useEffect(() => {
    const getBookmarkedList = async () => {
      const data: any = await BookmarkedPost.getBookmarkedPost(USER_ID_KEY);
      console.log(data);
      // if (data.length > 0) {
      //   setBookmarkList(data);
      // }
    };
    const initUseEffect = async () => {
      let { USER_ID_KEY } = useParams();
      await getBookmarkedList();
    };
    initUseEffect();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Typography>Click in title to see detail</Typography>
      {/* <DataGrid
        rows={bookmarkList.map((bookmark, index) => {
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
      /> */}
    </Box>
  );
};

export default BookmarkedList;
