const baseURL = "https://jsonplaceholder.typicode.com/";

const users = "/users";
const posts = "/posts";

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`,
        byIdPosts: (id) => `${users}/${id}/posts`,
    },
    posts: {
        base: posts,
    }
}


export {
    baseURL,
    urls
}