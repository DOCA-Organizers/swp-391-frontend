import { LoginRequest } from "interfaces/login/loginRequest";

import axiosClient from "./axiosClient";

const LoginAPI = {
  login: (params: LoginRequest) => {
    return axiosClient.post<LoginRequest>("login", params);
  },
};

export default LoginAPI;
