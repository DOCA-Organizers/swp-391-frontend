import axiosClient from "service/axiosClient";

const postAPI = {
    getAll(params: any){
        
    },

    get(id: any){
        
    },

    add(data: any){
        const url = '/api/CreatePost';
        return axiosClient.post(url, data);
    },

    update(data: any){
        
    },

    remove(id: any){
        const url = `/post/delete/${id}`;
        return axiosClient.delete(url);
    }
};

export default postAPI;