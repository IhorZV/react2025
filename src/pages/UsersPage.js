import React from 'react';
import {Outlet} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users";
import css from "./UsersPage.module.css";

const UsersPage = () => {
    return (
        <div className={css.container}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};