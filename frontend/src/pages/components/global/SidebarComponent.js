import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "../../../styles/styles";

import AdminSubmenu from "./sidebar/AdminSubmenu";
import GeneralSubmenu from "./sidebar/GeneralSubmenu";
import KnightsSubmenu from "./sidebar/KnightsSubmenu";
import TzarSubmenu from "./sidebar/TzarSubmenu";

import { Layout, Menu } from "antd";
const { Sider } = Layout;
const { Divider } = Menu;

const submenuKeys = {
    ADMIN_KEY: "admin",
    GENERAL_KEY: "general",
    KNIGHTS_KEY: "knights",
    TZAR_KEY: "tzar"
};

const { ADMIN_KEY, GENERAL_KEY, KNIGHTS_KEY, TZAR_KEY } = submenuKeys;

class SidebarComponent extends Component {
    rootSubmenuKeys = [KNIGHTS_KEY, TZAR_KEY, ADMIN_KEY];

    state = {
        openKeys: [KNIGHTS_KEY, TZAR_KEY, ADMIN_KEY]
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    };

    render() {
        const { isAuthenticated, dispatch, ...menuProps } = this.props;

        return (
            <Sider
                collapsedWidth={styles.sider.collapsedWidth}
                collapsible
                style={styles.sider}
                width={styles.sider.width}
            >
                <Menu
                    mode={styles.sidebarMenu.mode}
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    defaultSelectedKeys={GENERAL_KEY}
                    style={styles.sidebarMenu}
                >
                    <GeneralSubmenu {...menuProps} key={GENERAL_KEY} />
                    <Divider />
                    <KnightsSubmenu {...menuProps} key={KNIGHTS_KEY} />
                    <Divider />
                    <TzarSubmenu {...menuProps} key={TZAR_KEY} />
                    <Divider />
                    {isAuthenticated ? (
                        <AdminSubmenu {...menuProps} key={ADMIN_KEY} />
                    ) : null}
                </Menu>
            </Sider>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(SidebarComponent);
