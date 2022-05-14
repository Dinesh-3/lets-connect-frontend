import React, { Component } from "react";

import Posts from "../Posts";
import SideNav from "../SideNav";

import "./homepage.css";

class HomePage extends Component {
    state = {};
    render() {
        return (
            <main className="home-page">
                <Posts />
                <SideNav />
            </main>
        );
    }
}

export default HomePage;
