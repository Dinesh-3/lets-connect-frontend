import React from "react";
import request from "../../../services/request";
import Notification from "../../Notification";
import REGEX_PATTERN from "./validate";

interface PostFormProps {
    addSavePost: Function;
}

interface PostFormState {
    title: string;
    description: string;
}

const initialFormState = { title: "", description: "" };

class PostForm extends React.Component<PostFormProps, PostFormState> {
    constructor(props: PostFormProps) {
        super(props);
        this.state = initialFormState;
    }

    validateForm = () => {
        let isValid = true;
        Object.entries(this.state).forEach((entry) => {
            if (!REGEX_PATTERN.content.pattern.test(entry[1])) {
                Notification.show({ status: true, message: REGEX_PATTERN.content.message(entry[0]) });
                isValid = false;
            }
        });
        return isValid;
    };

    savePost = async (e) => {
        e.preventDefault();

        if (!this.validateForm()) return;

        const response = await request({ path: "/post", body: { ...this.state }, method: "POST" });

        if (!response.status) return alert(response.message);
        this.onSavePost(response.data);
        this.setState(initialFormState);
    };

    onSavePost = (post: any) => {
        this.props.addSavePost(post);
    };

    handleInputChange = (e) => {
        const updatedState = { [e.target.name]: e.target.value } as Pick<PostFormState, keyof PostFormState>;
        this.setState(updatedState);
    };

    render() {
        return (
            <form onSubmit={this.savePost}>
                <input
                    type="text"
                    name="title"
                    id="postTitle"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />
                <textarea
                    name="description"
                    id="postDescription"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    cols={30}
                    rows={10}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default PostForm;
