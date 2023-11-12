import { LoginRequest } from "interfaces/login/loginRequest";
import axiosClient from "service/axiosClient";

const loginAPI = {
  login: (loginRequest: LoginRequest) => {
    return axiosClient.post("login", loginRequest);
  },
};

export default loginAPI;
