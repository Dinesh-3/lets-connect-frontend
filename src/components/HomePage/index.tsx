import React, { Component } from "react";
import PostSection from "../PostSection";
import PostForm from "../PostSection/create";

import Posts from "../PostSection/Posts";
import SideNav from "../SideNav";

import "./homepage.css";

class HomePage extends Component {
    state = {};
    render() {
        return (
            <main className="home-page">
                <PostSection />
                <SideNav />
            </main>
        );
    }
}

export default HomePage;
