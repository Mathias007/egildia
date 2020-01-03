import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;
const { Item } = Menu;

class AdminSidebarComponent extends Component {
    state = {};
    render() {
        return (
            <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["knights"]}
                    style={{ height: "100%", borderRight: 0 }}
                >
                    <SubMenu
                        key="articles"
                        title={
                            <span>
                                <Icon type="user" />
                                Artykuły{" "}
                            </span>
                        }
                    >
                        <Item key="1">
                            <NavLink to="/admin/articles/list">Lista</NavLink>
                        </Item>
                        <Item key="2">
                            <NavLink to="/admin/articles/add">Dodaj</NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu
                        key="news"
                        title={
                            <span>
                                <Icon type="laptop" />
                                Wpisy
                            </span>
                        }
                    >
                        <Item key="3">
                            <NavLink to="/admin/news/list">Lista</NavLink>
                        </Item>
                        <Item key="4">
                            <NavLink to="/admin/news/add">Dodaj</NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu
                        key="users"
                        title={
                            <span>
                                <Icon type="notification" />
                                Użytkownicy
                            </span>
                        }
                    >
                        <Item key="5">Lista</Item>
                        <Item key="6">Dodaj</Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default AdminSidebarComponent;
