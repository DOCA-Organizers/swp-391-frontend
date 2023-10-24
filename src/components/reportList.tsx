import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReportList from "service/reportPost/reportList";

type Props = {};

const TableAdmin = (props: Props) => {
  const [ReportList, setReportList] = useState<ReportList[]>([]);

  useEffect(() => {
    const getReportList = async () => {
      const data: any = await ReportList.getReportList();
      console.log(data);
      if (data.length > 0) {
        setReportList(data);
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
  )
};

export default TableAdmin;
