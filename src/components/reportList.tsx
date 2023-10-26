import { Box } from "@mui/material";
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

  return <Box sx={{ height: 400, width: "100%" }}></Box>;
};

export default ReportList;
