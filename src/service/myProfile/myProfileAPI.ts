import {
  CountResponse,
  UserProfile,
} from "interfaces/requestInterface/request";
import axiosClient from "../axiosClient";

const MyProfileAPI = {
  getMyProfileAPI: (userID: string) => {
    return axiosClient.get<UserProfile>(`/profile/userid=${userID}`);
  },
  getCountAPI: (userID: string) => {
    return axiosClient.get<CountResponse>(`/profile/userid=${userID}`);
  },
};

export default MyProfileAPI;
