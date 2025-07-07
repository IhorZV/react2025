import {apiService} from "./apiService";

import {urls} from "../constants/urls";

const commentsService = {

    getAll: () => apiService.get(urls.comments.base),
    getPostsByCommentsId: (postId) => apiService.get(urls.comments.getPostsByCommentId(postId))
}

export {
    commentsService
}