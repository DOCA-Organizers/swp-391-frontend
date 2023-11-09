import { SearchContent } from "interfaces/requestInterface/request";
<<<<<<< HEAD
import axiosClient from "service/axiosClient";
=======
import axiosClient from "./axiosClient";
>>>>>>> origin/huyBranch

const searchContent = {
  getSearchByContent: (content: string) => {
    return axiosClient.get<SearchContent>(`${content}`);
  },

  getSearchList: () => {
    return axiosClient.get<SearchContent[]>("");
  },
};

export default searchContent;
