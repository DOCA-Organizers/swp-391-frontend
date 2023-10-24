import axios, { AxiosError } from "axios";
import { error } from "console";

const axiosClient = axios.create({ baseURL:
     'https://6513a4708e505cebc2ea0295.mockapi.io/api/' });

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error: AxiosError<{ content: string }>) => {
        return error.response?.data;
    }
);

export default axiosClient;