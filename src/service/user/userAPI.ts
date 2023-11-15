
import { User } from "interfaces/user/userResponse";
import axiosClient from "service/axiosClient";

const userAPI = {
  getUserList: () => {
    console.log("fffff");
    return axiosClient.get<User[]>("userlist");
  }
};

export default userAPI;
