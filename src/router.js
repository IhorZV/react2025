import {createBrowserRouter} from "react-router-dom";

import {HomePage} from "./pages/HomePage";
import {UserPage} from "./pages/UserPage";

const roter = createBrowserRouter([
    {
        path: "home", element: <HomePage/>
    },
    {
        path: "users", element: <UserPage/>
    }
]);

export {
    roter
}