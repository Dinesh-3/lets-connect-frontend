import React, { Component, FC, useEffect, useState } from "react";
import { useAuth } from "../../../auth/AuthContext";
import request from "../../../services/request";
import PostItem from "../PostItem";
import { posts as postsData } from "./dataset";
import { Post } from "../index";

interface PostsProps {
    posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
    const { useUser } = useAuth();

    const [user] = useUser();

    useEffect(() => {
        request({
            path: `/post`
        });
    }, []);

    return (
        <section>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </section>
    );
};

export default Posts;
