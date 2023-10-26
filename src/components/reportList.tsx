import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ReportList } from "interfaces/requestInterface/request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import reportPost from "service/reportPost/reportPost";

const ReportList = () => {
  const [ReportList, setReportList] = useState<ReportList[]>();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response: any = await reportPost.getUserList();
        if (!response || response.length <= 0) {
          setReportList([]);
        }
        setReportList(response);
      })();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

import React from 'react'

type Props = {}

const reportList = (props: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <DataGrid
        // rows={ReportList.map((item, index) => {
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

export default ReportList;
