import { PetList } from "interfaces/requestInterface/request";
import axiosClient from "./axiosClient";

const petByPost = {
  getPetList: (postID: number) => {
    return axiosClient.get<PetList[]>(`api/pet/postid=${postID}`);
  },
};

export default petByPost;
