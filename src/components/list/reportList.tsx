import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ReportListInterface } from "interfaces/requestInterface/request";

import { useEffect, useState } from "react";
import reportPost from "service/reportPost/reportPost";

const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "numPost",
    width: 150,
  },

  {
    field: "Post ID",
    headerName: "postId",
    width: 150,
  },

  {
    field: "numberOfPost",
    headerName: "numPost",
    width: 150,
  },

  {
    field: "postID",
    headerName: "postID",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const ReportList = () => {
  const [reportList, setReportList] = useState<ReportListInterface[]>([]);

  useEffect(() => {
    const getReportList = async () => {
      const data: any = await reportPost.getReportList();
      console.log(data);
      // if (data.length > 0) {
      //   setReportList(data);
      // }
    };
    const initUseEffect = async () => {
      await getReportList();
    };
    initUseEffect();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={reportList.map((report, index) => {
          return { stt: index + 1, ...report };
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

export default ReportList;
