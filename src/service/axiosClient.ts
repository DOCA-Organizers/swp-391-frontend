import axios, { AxiosError } from "axios";
import { USER_TOKEN_KEY } from "constant";
import { isEmpty } from "lodash";

const token = JSON.parse(localStorage.getItem(USER_TOKEN_KEY)!);
const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (token !== null && !isEmpty(token)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<{ content: string }>) => {
    return error.response?.data;
  }
);

export default axiosClient;
