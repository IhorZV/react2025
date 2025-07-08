import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {UserDetails} from "./components/UsersContainer/UserDetails";
import {TitlePage} from "./pages/TitlePage";

const router = createBrowserRouter([

    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [

            {index: true, element: <Navigate to={"users"}/>},
            {
                path: "users", element: <UsersPage/>, children: [
                    {
                        path: ":id", element: <UserDetailsPage/>, children: [{
                            path: "posts", element: <TitlePage/>
                        }]
                    }
                ]
            },
            {
                path: "posts", element: <PostsPage/>
            }

        ]
    }

]);

export {router};