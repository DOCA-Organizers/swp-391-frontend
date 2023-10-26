import { CategoryRequest } from "interfaces/requestInterface/request";
import axiosClient from "services/axiosClient";

const CategoryService = {
  getPostByCategory: (categoryID: number) => {
    return axiosClient.get<CategoryRequest>(`${categoryID}`);
  },
};

export default CategoryService;
