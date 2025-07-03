import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const postservice = {

    getAllPosts: () => axiosService(urls.posts.base),
}

export {postservice};