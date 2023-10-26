import { LoginRequest } from "interfaces/requestInterface/request";

import axiosClient from "../axiosClient";

const LoginAPI = {
  // tokenLoad() {
  //   let config = {
  //     headers: {
  //       'Authorization': 'Bearer ' + validToken(),
  //     }
  //   }
  // }

  login: (params: LoginRequest) => {
    console.log("Params: ", params);
    return axiosClient.post("login/", params);
  },
};

export default LoginAPI;
