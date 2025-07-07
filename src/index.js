import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './index.css';
import {roter} from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={roter}/>
);
