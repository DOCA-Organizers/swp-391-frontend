import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { Authorization: "Bearer $authToken?.access" },
  // headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<{ content: string }>) => {
    return error.response?.data;
  }
);

export default axiosClient;
