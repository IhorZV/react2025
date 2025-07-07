import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    let {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div>
            <div>postId - {postId}</div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>email - {email}</div>
            <div>body - {body}</div>
            <button onClick={() => navigate("posts", {state: {postId}})}>getPosts</button>

        </div>
    );
};

export {Comment};