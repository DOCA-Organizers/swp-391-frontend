import { User } from "interfaces/user/userResponse";
import axiosClient from "service/axiosClient";

const userAPI = {
  getUserList: () => {
    return axiosClient.get<User[]>("userlist");
  },

  countUserIsActive: () => {
    return axiosClient.get("manage/count/user");
  },
};

export default userAPI;
