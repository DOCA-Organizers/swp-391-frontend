import { RegisterForm } from "interfaces/register/registerForm";
import axiosClient from "../axiosClient";

const RegistrationAPI = {
  register: (params: RegisterForm) => {
    return axiosClient.post<RegisterForm>("register/", params);
  },
};

export default RegistrationAPI;
