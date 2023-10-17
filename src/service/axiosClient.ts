import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: "localhost:8080/api/",
});

axiosClient.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (err: AxiosError<{ content: string }>) => {
    return err.response?.data;
  }
);

export default axiosClient;
