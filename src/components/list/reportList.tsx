import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ReportListInterface } from "interfaces/requestInterface/request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import reportPost from "service/reportPost/reportPost";

const ReportList = () => {
  const [reportList, setReportList] = useState<ReportListInterface[]>([]);
  const navigate = useNavigate();
  const columns: GridColDef[] = [
    {
      field: "no",
      headerName: "No",
      width: 120,
    },
    {
      field: "username",
      headerName: "Username",
      width: 250,
    },

    {
      field: "categoryId",
      headerName: "Category ID",
      width: 180,
    },

    {
      field: "petType",
      headerName: "Pet Type",
      width: 180,
    },

    {
      field: "exchange",
      headerName: "Exchange",
      width: 180,
      renderCell: (param) => {
        console.log("Param: ", param.row);
        if (param.row.exchange === true) {
          return <Typography fontWeight="bolder">Trade</Typography>;
        } else if (param.row.exchange === false) {
          return <Typography>Discuss</Typography>;
        }
      },
    },

    {
      field: "detailPost",
      headerName: "Detail of Post",
      headerClassName: "super-app-theme--header",
      description: "This column has a value getter and is not sortable.",

      sortable: false,
      width: 180,
      renderCell: (param) => {
        // console.log("Param: ", param.row.id);
        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="Click to view detail">
              <IconButton
                aria-label="update block"
                onClick={() => {
                  console.log(param.row.categoryId);
                  // navigate(0);
                }}
              >
                <VisibilitySharpIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];
  useEffect(() => {
    const getReportList = async () => {
      const data: any = await reportPost.getReportList();
      if (data.data.length > 0) {
        setReportList(data.data);
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
        sx={{
          marginRight: 6,
          marginTop: 4,
        }}
        rows={reportList.map((report, index) => {
          return { no: index + 1, ...report };
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
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ReportList;
