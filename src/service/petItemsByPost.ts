import { PetItemsList } from "interfaces/requestInterface/request";
import axiosClient from "./axiosClient";

const petItemsByPost = {
  getPetItemsList: (postID: number) => {
    return axiosClient.get<PetItemsList[]>(`${postID}`);
  },
};

export default petItemsByPost;
