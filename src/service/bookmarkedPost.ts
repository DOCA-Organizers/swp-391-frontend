import { BookmarkedPost } from "interfaces/requestInterface/request";
import axiosClient from "service/axiosClient";

const BookmarkedPost = {
  getBookmarkedPost: (userID: number) => {
    return axiosClient.get<BookmarkedPost>(`${userID}`);
  },
};

export default BookmarkedPost;
