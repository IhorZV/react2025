import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsCommentsPage} from "./pages/PostsCommentsPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {index: true, element: <Navigate to={"comments"}/>},
            {path: "albums", element: <AlbumsPage/>},
            {path: "todos", element: <TodosPage/>},
            {
                path: "comments", element: <CommentsPage/>, children: [
                    {path: "posts", element: <PostsCommentsPage/>}
                ]
            },
        ]
    }
]);

export {router};