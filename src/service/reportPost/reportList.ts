import axiosClient from "service/axiosClient";

const ReportList = {
  register: (params: ReportList) => {
    return axiosClient.post<ReportList>("report/list/", params);
  },
};

export default ReportList;
