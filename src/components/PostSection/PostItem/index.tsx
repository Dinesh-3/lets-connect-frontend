import React, { useContext } from "react";
import { useAuth } from "../../../auth/AuthContext";

import "./post.css";

const PostItem = ({ post }) => {
    return (
        <div className="post-container">
            <h6>{post.title}</h6>
            <p>{post.description}</p>
        </div>
    );
};

export default PostItem;
