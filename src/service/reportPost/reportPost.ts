import { AccountRequest } from "interfaces/requestInterface/request";
import axiosClient from "service/axiosClient";

const reportPost = {
  getUserByUsername: (username: string) => {
    return axiosClient.get<AccountRequest>(`${username}`);
  },

  getUserList: () => {
    return axiosClient.get<AccountRequest>("");
  },
};

export default reportPost;
