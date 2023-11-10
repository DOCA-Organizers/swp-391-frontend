import { BookmarkList } from "interfaces/requestInterface/request";
import axiosClient from "service/axiosClient";

const BookmarkedPost = {
  getBookmarkedPost: (userID: number) => {
    return axiosClient.get<BookmarkList[]>(`api/bookmark/List/${userID}`);
  },
};

export default BookmarkedPost;
