import { BookmarkList } from "interfaces/requestInterface/request";
import axiosClient from "service/axiosClient";

const BookmarkedPost = {
  getBookmarkedPost: (userID: string) => {
    return axiosClient.get<BookmarkList[]>(`api/bookmark/List/${userID}`);
  },
};

export default BookmarkedPost;
