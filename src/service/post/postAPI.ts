import { PostRequest } from "interfaces/post/postRequest";
import axiosClient from "service/axiosClient";

const postAPI = {
  getPostByCategoryID: (id: number) => {
    return axiosClient.get(`search/category=${id}`);
  },
  createPost: (postRequest: PostRequest) => {
    return axiosClient.post("CreatePost", postRequest);
  },

  getNumberPostAndCommentAllCategory: () => {
    return axiosClient.get("CategoryInfo");
  }
};

export default postAPI;
