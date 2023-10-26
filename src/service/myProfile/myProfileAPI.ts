import { MyProfileRequest } from "interfaces/requestInterface/request";
import axiosClient from "../axiosClient";

const MyProfileAPI = {
  profile: (params: MyProfileRequest) => {
    console.log("Params: ", params);
    return axiosClient.post("myprofile/", params);
  },
};

export default MyProfileAPI;
