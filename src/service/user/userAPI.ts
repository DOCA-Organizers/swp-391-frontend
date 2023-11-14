
import axiosClient from "service/axiosClient";

const userAPI = {
  getUserList: () => {
    return axiosClient.get("/userlist");
  }
};

export default userAPI;
