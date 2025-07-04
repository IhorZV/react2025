import {apiService} from "./apiService";
import {urls} from "../contants/Urls";

const postService = {
    getAll: () => apiService.get(urls.posts),
    create: (data) => apiService.post(urls.posts, data),
}

export {postService};