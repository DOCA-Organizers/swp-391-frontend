import { CategoryRequest } from "interfaces/requestInterface/request";
import axiosClient from "service/axiosClient";

const CategoryService = {
  getPostByCategory: (categoryID: number) => {
    return axiosClient.get<CategoryRequest>(`${categoryID}`);
  },
};

export default CategoryService;
