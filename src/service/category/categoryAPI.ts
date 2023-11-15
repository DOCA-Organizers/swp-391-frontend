import { CategoryInfoResponse } from "interfaces/category/categoryResponse";
import axiosClient from "service/axiosClient";

const CategoryAPI = {
  getCategoryInfo: () => {
    return axiosClient.get<CategoryInfoResponse[]>("CategoryInfo");
  },
};

export default CategoryAPI;
