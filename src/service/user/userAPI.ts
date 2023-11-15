import axiosClient from "service/axiosClient";

const userAPI = {
  getUserList: () => {
    return axiosClient.get("userlist");
  },

  countUserIsActive: () => {
    return axiosClient.get("manage/count/user");
  },
};

export default userAPI;
