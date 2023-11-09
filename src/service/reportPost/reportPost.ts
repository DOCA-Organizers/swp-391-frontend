import { ReportListInterface } from "interfaces/requestInterface/request";
import axiosClient from "service/axiosClient";

const reportPost = {
  getReportList: () => {
    return axiosClient.get<ReportListInterface[]>(`api/report/list`);
  },
};

export default reportPost;
