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

  // login: (params: LoginRequest) => {
  //   return axiosClient.post<LoginRequest>("login", params);
  // },

  login: (params: LoginRequest) => {
    console.log("Params: ", params);
    return axiosClient.post("login/", params);
  },
};

export default LoginAPI;
