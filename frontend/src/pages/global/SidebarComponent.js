import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import routesPaths from "../../_config/routesPaths";
import navigationTitles from "../../_config/navigationTitles";

import { Layout, Menu, Icon } from "antd";
import styles from "../../styles/styles";
const { SubMenu } = Menu;
const { Sider } = Layout;
const { Item } = Menu;

const { GENERAL, ARTICLES, NEWS, KNIGHTS, TZAR, USERS } = routesPaths;
const {
    GENERAL_INDEX,
    KNIGHTS_AND_MERCHANTS,
    KNIGHTS_MAIN,
    KNIGHTS_BUILDINGS,
    KNIGHTS_UNITS,
    KNIGHTS_REVIEW,
    TZAR_BURDEN_CROWN,
    TZAR_MAIN,
    TZAR_NATIONS,
    TZAR_SPELLS,
    TZAR_TECHNOLOGIES,
    TZAR_UNITS,
    ADMINISTRATION,
    ADMIN_ARTICLES,
    ADMIN_NEWS,
    ADMIN_USERS
} = navigationTitles;

class SidebarComponent extends Component {
    rootSubmenuKeys = ["knights", "tzar", "admin"];

    state = {
        openKeys: ["knights"]
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
        return (
            <Sider width={230} style={styles.sider}>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    defaultSelectedKeys={"0"}
                    style={styles.sidebarMenu}
                >
                    <Item key="0">
                        <NavLink to={GENERAL.INDEX}>
                            <Icon type="pie-chart" />
                            <span> {GENERAL_INDEX}</span>
                        </NavLink>
                    </Item>
                    <SubMenu
                        key="knights"
                        title={
                            <span>
                                <Icon type="skin" />
                                {KNIGHTS_AND_MERCHANTS}
                            </span>
                        }
                    >
                        <Item key="1">
                            <NavLink to={KNIGHTS.MAIN}>{KNIGHTS_MAIN}</NavLink>
                        </Item>
                        <Item key="2">
                            <NavLink to={KNIGHTS.BUILDINGS}>
                                {KNIGHTS_BUILDINGS}
                            </NavLink>
                        </Item>
                        <Item key="3">
                            <NavLink to={KNIGHTS.UNITS}>
                                {KNIGHTS_UNITS}
                            </NavLink>
                        </Item>
                        <Item key="4">
                            <NavLink to="#">{KNIGHTS_REVIEW}</NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu
                        key="tzar"
                        title={
                            <span>
                                <Icon type="crown" />
                                {TZAR_BURDEN_CROWN}
                            </span>
                        }
                    >
                        <Item key="5">
                            <NavLink to={TZAR.MAIN}>{TZAR_MAIN}</NavLink>
                        </Item>
                        <Item key="6">
                            <NavLink to={TZAR.NATIONS}>{TZAR_NATIONS}</NavLink>
                        </Item>
                        <Item key="7">
                            <NavLink to={TZAR.UNITS}>{TZAR_UNITS}</NavLink>
                        </Item>
                        <Item key="8">
                            <NavLink to={TZAR.SPELLS}>{TZAR_SPELLS}</NavLink>
                        </Item>
                        <Item key="9">
                            <NavLink to={TZAR.TECHNOLOGIES}>
                                {TZAR_TECHNOLOGIES}
                            </NavLink>
                        </Item>
                    </SubMenu>

                    {this.props.isAuthenticated ? (
                        <SubMenu
                            key="admin"
                            title={
                                <span>
                                    <Icon type="setting" />
                                    {ADMINISTRATION}
                                </span>
                            }
                        >
                            <Item key="10">
                                <NavLink to={ARTICLES.MAIN}>
                                    {ADMIN_ARTICLES}
                                </NavLink>
                            </Item>
                            <Item key="11">
                                <NavLink to={NEWS.MAIN}>{ADMIN_NEWS}</NavLink>
                            </Item>
                            <Item key="12">
                                <NavLink to={USERS.MAIN}>{ADMIN_USERS}</NavLink>
                            </Item>
                        </SubMenu>
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

// const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(SidebarComponent);
