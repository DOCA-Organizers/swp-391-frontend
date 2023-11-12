import CommentRequest from "interfaces/comment/commentRequest";
import { PostRequest } from "interfaces/post/postRequest";
import axiosClient from "service/axiosClient";

const commentAPI = {
  createComment: (commentRequest: CommentRequest) => {
    return axiosClient.post("comment", commentRequest);
  },
};

export default commentAPI;