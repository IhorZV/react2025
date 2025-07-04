import React from 'react';
import {useForm} from "react-hook-form";
import {postService} from "../../servises/postService";

const PostsForm = ({setPosts}) => {

    const {reset, register, handleSubmit} = useForm();

    const save = (post) => {

        postService.create(post).then(({data}) => setPosts(prev => [...prev, data]));
        console.log(post);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'} {...register("title")}/>
            <input type="text" placeholder={'body'} {...register("body")}/>
            <button>save</button>
        </form>
    );
};

export {PostsForm};