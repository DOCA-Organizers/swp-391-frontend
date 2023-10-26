import { RegisRequest } from "interfaces/requestInterface/request";
import axiosClient from "../axiosClient";

const RegistrationAPI = {
  register: (params: RegisRequest) => {
    return axiosClient.post<RegisRequest>("register/", params);
  },
};

export default RegistrationAPI;
