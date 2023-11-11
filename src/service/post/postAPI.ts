import axiosClient from "service/axiosClient";

const postAPI = {
  getPostByCategoryID: (id: number) => {
    return axiosClient.get(`search/category=${id}`);
  },
};

export default postAPI;
