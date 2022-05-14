import React, { Component } from "react";
import NavMessage from "../NavMessage";
import Suggestion from "../Suggestion";

type SideNavProps = {};

class SideNav extends Component {
    constructor(props: SideNavProps) {
        super(props);
    }
    state = {};
    render() {
        return (
            <div>
                <NavMessage />
                <Suggestion />
            </div>
        );
    }
}

export default SideNav;
