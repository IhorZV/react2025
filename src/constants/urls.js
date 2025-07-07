const baseURL = "https://jsonplaceholder.typicode.com";

const comments = "/comments"
const albums = "/albums"
const todos = "/todos"

const urls = {

    comments: {
        base: comments,
        getPostsByCommentId: (id) => `posts/${id}/comments`
    },
    albums:{
        base: albums
    },
    todos:{
        base: todos
    }

}

export {
    baseURL,
    urls
};