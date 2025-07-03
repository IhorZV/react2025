import React from 'react';
import {Users} from "./components/UserContainer/Users/Users";
import {Posts} from "./components/PostContainer/Posts/Posts";

const App = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
        </div>
    );
};

export {App};