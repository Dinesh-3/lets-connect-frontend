import React, { Component } from "react";

import "./header.css";

class Header extends Component {
    state = {};

    render() {
        return (
            <header className="header">
                <h2>Let's Connect</h2>
                <section className="flex search">
                    <input type="text" />
                </section>
                <nav>
                    <ul className="container">
                        <li>Home</li>
                        <li>Connections</li>
                        <li>Create</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
