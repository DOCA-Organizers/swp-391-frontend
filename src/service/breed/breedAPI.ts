import axiosClient from "services/axiosClient"

const breedAPI = {
    getBreedList: ()=> {
        return axiosClient.get<any>("doca/breed");
    }
}

export default breedAPI