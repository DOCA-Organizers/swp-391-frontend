import { MyProfileRequest } from "interfaces/myprofile/myProfileRequest";
import axiosClient from "../axiosClient";

const MyProfileAPI = {
  login: (params: MyProfileRequest) => {
    console.log("Params: ", params);
    return axiosClient.post("myprofile/", params);
  },
};

export default MyProfileAPI;
