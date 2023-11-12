import axios from "axios";
import { ReportResponse } from "interfaces/report/reportResponse";

const reportPost = {
  // getReportList: () => {
  //   return axiosClient.get<ReportListInterface[]>(`api/report/list`);
  // },

  getReportList: () => {
    return axios.get<ReportResponse[]>(
      "https://6513a0d28e505cebc2ea0061.mockapi.io/api/doca/reportlist"
    );
  },
};

export default reportPost;
