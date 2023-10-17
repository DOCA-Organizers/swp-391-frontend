import { LoginRequest } from "interfaces/login/loginRequest";

import axiosClient from "../axiosClient";

const LoginAPI = {
  // tokenLoad() {
  //   let config = {
  //     headers: {
  //       'Authorization': 'Bearer ' + validToken()
  //     }
  //   }
  // }

  login: (params: LoginRequest) => {
    return axiosClient.post<LoginRequest>("login", params);
  },
};

export default LoginAPI;
