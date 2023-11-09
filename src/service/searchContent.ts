import { SearchContent } from "interfaces/requestInterface/request";
import axiosClient from "./axiosClient";

const searchContent = {
  getSearchByContent: (content: string) => {
    return axiosClient.get<SearchContent>(`${content}`);
  },

  getSearchList: () => {
    return axiosClient.get<SearchContent[]>("");
  },
};

export default searchContent;
