import React, { Component, FC } from "react";
import { useState } from "react";
import Post from "../Post";
import { posts as postsData } from "./dataset";

const Posts: FC = (props) => {
    const [posts, setPosts] = useState(postsData);

    return (
        <section>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </section>
    );
};

export default Posts;
