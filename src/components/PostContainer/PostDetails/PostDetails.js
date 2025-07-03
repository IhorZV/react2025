import React from 'react';

const PostDetails = ({postDetails}) => {
    const {id, title, body} = postDetails;
    return (
        <div>
            <div>{id}) == {title} </div>
            <div>body - {body}</div>
        </div>
    );
};

export {PostDetails};