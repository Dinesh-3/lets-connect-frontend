import React from "react";
import request from "../../services/request";
import PostForm from "./create";
import Posts from "./Posts";

interface PostSectionProps {}

interface PostSectionState {
    posts: Post[];
}

export type Post = {
    id: number;
    title: string;
    description: string;
};

class PostSection extends React.Component<PostSectionProps, PostSectionState> {
    constructor(props: PostSectionProps) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount = async () => {
        const result = await request({ path: "/post" });

        if (result.status) this.setState({ posts: result.data });
    };

    addSavePost = (post: Post): void => {
        this.setState((prevState) => ({ posts: [...prevState.posts, post] }));
    };

    render() {
        return (
            <div>
                <PostForm addSavePost={this.addSavePost} />
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default PostSection;
