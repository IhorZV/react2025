import {useEffect, useState} from "react";
import {Post} from "../Post/Post";
import {postservice} from "../../../services/postService";
import css from "../Posts/Posts.module.css"
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postservice.getAllPosts().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post)
    }
    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>
            <hr/>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};