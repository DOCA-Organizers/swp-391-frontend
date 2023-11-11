import { MyProfileRequest } from "interfaces/requestInterface/request";
import axiosClient from "../axiosClient";

const MyProfileAPI = {
  getMyProfileAPI: (userID: string) => {
    return axiosClient.get<MyProfileRequest>(`/api/profile/userid=${userID}`);
  },
};

export default MyProfileAPI;
