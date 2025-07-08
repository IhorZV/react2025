import {axiosService} from "./apiService";

import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users.base),
    getById: (id) => axiosService.get(urls.users.byId(id)),
    getByIdPosts: (id) => axiosService.get(urls.users.byIdPosts(id))
}

export {
    userService
}