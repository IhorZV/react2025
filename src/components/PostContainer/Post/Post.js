import React from 'react';

const Post = ({post, getCurrentPost}) => {

    let {id, title} = post;

    return (
        <div>
            {id}) - {title}
            <button onClick={()=>getCurrentPost(post)}>get</button>
        </div>
    );
};

export {Post};