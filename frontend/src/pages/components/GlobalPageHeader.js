import React, { Component } from "react";
import { Layout, Menu } from "antd";

import AvatarGlobalComponent from "./AvatarGlobalComponent";
import eGildiaLogo from "../../img/logo/egg-logo-poziome.png"

const { Header } = Layout;
const { Item } = Menu;

class GlobalPageHeader extends Component {
    state = {};
    render() {
        return (
            <Header className="header">
                <div className="logo" >
                    <img src={eGildiaLogo} />
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
                <AvatarGlobalComponent />
            </Header>
        );
    }
}

export default GlobalPageHeader;
