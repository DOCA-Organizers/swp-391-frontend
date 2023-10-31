import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { BookmarkedPost } from "interfaces/requestInterface/request";
import { useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Navigate, useNavigate } from "react-router-dom";
import ViewIcon from "@mui/icons-material/Visibility";

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

const BookmarkedPost = () => {
  const [bookmarkedList, setbookmarkedList] = useState<BookmarkedPost>();
  const Navigate = useNavigate();
  const columns: GridColDef[] = [
    { field: "number", headerName: "Number", width: 90 },
    {
      field: "username",
      headerName: "Username",
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Full name",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone number",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: (param) => {
        if (param.row.roles[0].name === "Admin") {
          return <Typography>Admin</Typography>;
        } else if (param.row.roles[0].name === "Staff") {
          return <Typography>Staff</Typography>;
        } else if (param.row.roles[0].name === "Member") {
          return <Typography>Member</Typography>;
        } else return <Typography>{param.row.roles[0].name}</Typography>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 1,
      renderCell: (param) => {
        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="Xem Chi Tiết">
              <IconButton
                aria-label="view detail"
                onClick={() => {
                  Navigate("/post");
                }}
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];

  if (!bookmarkedList || bookmarkedList.userID.length <= 0) {
    return (
      <Box sx={{ width: "100%" }}>
        <DataGrid sx={{ height: "600px" }} columns={columns} rows={[]} />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      {/* <DataGrid
        rows={bookmarkedList.map((item, index) => {
          return { stt: index + 1, ...item };
        })}
        getRowId={(row) => row.id}
        style={{ height: "600px" }}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      /> */}
    </Box>
  );
};

export default BookmarkedPost;
