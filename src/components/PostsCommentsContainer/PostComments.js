import React from 'react';

const PostComments = ({item}) => {

    const {postId, id, name, email, body} = item;
    return (
        <div>
            <div>postId - {postId}</div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>email - {email}</div>
            <div>body - {body}</div>
        </div>
    );
};

export {PostComments};