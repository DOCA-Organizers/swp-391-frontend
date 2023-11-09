import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { SearchContent } from "interfaces/requestInterface/request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchContent from "service/searchContent";

const SearchList = () => {
  const [SearchList, setSearchList] = useState<SearchContent[]>();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response: any = await searchContent.getSearchByContent;
        if (!response || response.length <= 0) {
          setSearchList([]);
        }
        setSearchList(response);
      })();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  const columns: GridColDef[] = [
    { field: "stt", headerName: "STT", width: 90 },
    {
      field: "username",
      headerName: "Tên tài khoản",
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "Họ và tên",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Mô tả",
      flex: 1,
      renderCell: (param) => {
        if (param.row.roles[0].name === "Manager") {
          return <Typography>Quản lý</Typography>;
        } else if (param.row.roles[0].name === "Admin") {
          return <Typography>Quản trị viên</Typography>;
        } else if (param.row.roles[0].name === "Accountant") {
          return <Typography>Kế toán</Typography>;
        } else if (param.row.roles[0].name === "Staff") {
          return <Typography>Nhân viên</Typography>;
        } else if (param.row.roles[0].name === "Resident") {
          return <Typography>Cư dân</Typography>;
        } else return <Typography>{param.row.roles[0].name}</Typography>;
      },
    },
    {
      field: "action",
      headerName: "Tác Vụ",
      sortable: false,
      flex: 1,
      renderCell: (param) => {
        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="Xem Chi Tiết">
              <IconButton
                aria-label="view detail"
                onClick={() => {
                  navigate(`/admin/manage_account/view_detail/${param.row.id}`);
                }}
              >
                {/* <ViewIcon /> */}
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];

  if (!SearchList || SearchList.length <= 0) {
    return (
      <Box sx={{ width: "100%" }}>
        <DataGrid sx={{ height: "600px" }} columns={columns} rows={[]} />
      </Box>
    );
  }
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={SearchList.map((item, index) => {
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
      />
    </Box>
  );
};

export default SearchList;
