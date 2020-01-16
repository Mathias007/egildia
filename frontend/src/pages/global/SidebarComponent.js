import React, { Component } from "react";
import { connect } from "react-redux";

import AdminSubmenu from "./sidebar/AdminSubmenu";
import GeneralSubmenu from "./sidebar/GeneralSubmenu";
import KnightsSubmenu from "./sidebar/KnightsSubmenu";
import TzarSubmenu from "./sidebar/TzarSubmenu";

import { Layout, Menu } from "antd";
import styles from "../../styles/styles";
const { Sider } = Layout;
const { Divider } = Menu;

class SidebarComponent extends Component {
    rootSubmenuKeys = ["knights", "tzar", "admin"];

    state = {
        openKeys: ["knights", "tzar"]
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
        const { isAuthenticated, dispatch, ...other } = this.props;

        return (
            <Sider
                width={230}
                collapsedWidth={0}
                collapsible
                style={styles.sider}
            >
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    defaultSelectedKeys={"0"}
                    style={styles.sidebarMenu}
                >
                    <GeneralSubmenu {...other} />
                    <Divider />
                    <KnightsSubmenu {...other} />
                    <Divider />
                    <TzarSubmenu {...other} />
                    <Divider />
                    {isAuthenticated ? <AdminSubmenu {...other} /> : null}
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

// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(SidebarComponent);
