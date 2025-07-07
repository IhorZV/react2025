import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {commentsService} from "../../services/commentsService";
import {PostComments} from "./PostComments";

const PostsComments = () => {

    const [posts, setPosts] = useState([]);
    const {state: {postId}} = useLocation();

    useEffect(() => {
        commentsService.getPostsByCommentsId(postId).then(({data}) => setPosts(data));
    }, [postId]);

    return (
        <div>
            {posts.map(item => <PostComments key={item.id} item={item}/>)}
        </div>
    );
};

export {PostsComments};