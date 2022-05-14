import React from "react";

import "./post.css";

const Post = ({ post }) => {
    return (
        <div className="post-container">
            <h6>{post.title}</h6>
            <p>{post.description}</p>
        </div>
    );
};

export default Post;
