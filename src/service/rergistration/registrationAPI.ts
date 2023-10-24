import { RegisRequest } from "interfaces/registration/regisRequest";
import axiosClient from "../axiosClient";

const RegistrationAPI = {
  register: (params: RegisRequest) => {
    return axiosClient.post<RegisRequest>("register/", params);
  },
};

export default RegistrationAPI;
