import React from "react";

import HeaderAvatar from "./header/HeaderAvatar";
import HeaderLogo from "./header/HeaderLogo";
import HeaderMenu from "./header/HeaderMenu";

import { Layout } from "antd";
const { Header } = Layout;

export default function HeaderComponent(props) {
    return (
        <Header className="header">
            <HeaderLogo />
            <HeaderMenu />
            <HeaderAvatar />
        </Header>
    );
}
