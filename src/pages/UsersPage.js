import React from 'react';

import {Users} from "../components/UsersContainer/Users";
import {Outlet, useLoaderData} from "react-router-dom";

const UsersPage = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <Users users={data} />
            <Outlet/>
        </div>
    );
};

export {UsersPage};