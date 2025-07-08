import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UsersDetailsPage} from "./pages/UsersDetailsPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>, children: [

                    {
                        path: ':id', element: <UsersDetailsPage/>
                    }

                ]
            }
        ]
    }
]);

export {router};