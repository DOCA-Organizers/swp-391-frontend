import axiosClient from "service/axiosClient";

const breedAPI = {
  getBreedList: () => {
    return axiosClient.get<any>("doca/breed");
  },
};

export default breedAPI;
