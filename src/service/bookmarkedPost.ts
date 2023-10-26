import { BookmarkedPost } from "interfaces/requestInterface/request";
import axiosClient from "services/axiosClient";

const BookmarkedPost = {
  getBookmarkedPost: (userID: number) => {
    return axiosClient.get<BookmarkedPost>(`${userID}`);
  },
};

export default BookmarkedPost;
