import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name, email} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>email - {email}</div>
            <button onClick={() => navigate(id.toString(), {state: {user}})}>details</button>
        </div>
    );
};

export {User};