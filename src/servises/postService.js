import {apiService} from "./apiService";
import {urls} from "../contants/Urls";

const postService = {
    getAll: () => apiService.get(urls.posts.base),
    create: (data) => apiService.post(urls.posts.base, data),
    getById:(id) => apiService.get(urls.posts.byId(id)),
}

export {postService};