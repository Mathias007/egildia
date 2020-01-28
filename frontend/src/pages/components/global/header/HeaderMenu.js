import React from "react";

import styles from "../../../styles/styles";

import { Menu } from "antd";
const { Item } = Menu;

function HeaderMenu(props) {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={styles.headerMenu}
        >
            <Item key="1">nav 1</Item>
            <Item key="2">nav 2</Item>
            <Item key="3">nav 3</Item>
        </Menu>
    );
}

export default HeaderMenu;
