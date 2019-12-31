import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import AvatarComponent from "./AvatarComponent";
import eGildiaLogo from "../../img/logo/egg-logo-poziome.png";

const { Header } = Layout;
const { Item } = Menu;

class HeaderComponent extends Component {
    state = {};
    render() {
        return (
            <Header className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={eGildiaLogo} alt="e-Gildia Graczy" />
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{ lineHeight: "64px" }}
                >
                    <Item key="1">nav 1</Item>
                    <Item key="2">nav 2</Item>
                    <Item key="3">nav 3</Item>
                </Menu>
                <AvatarComponent />
            </Header>
        );
    }
}

export default HeaderComponent;