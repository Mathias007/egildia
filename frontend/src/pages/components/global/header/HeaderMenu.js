import React, { Component } from "react";

import styles from "../../../../styles/styles";

import { Menu } from "antd";

const { Item } = Menu;

class HeaderMenu extends Component {
    state = {
        current: "",
    };

    handleClick = (e) => {
        console.log("click ", e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu
                theme="dark"
                onClick={this.handleClick}
                style={styles.headerMenu}
                triggerSubMenuAction="click"
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Item key="portal">Portal</Item>
                <Item key="news">Nowości</Item>
                <Item key="materials">Zasoby</Item>
            </Menu>
        );
    }
}

export default HeaderMenu;
