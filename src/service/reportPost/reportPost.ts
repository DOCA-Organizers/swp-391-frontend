import { ReportList } from "interfaces/requestInterface/request";
import axiosClient from "service/axiosClient";

const reportPost = {
  getReportList: () => {
    return axiosClient.get<ReportList[]>("");
  },
};

export default reportPost;
