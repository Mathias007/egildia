import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Sider } = Layout;
const { Item } = Menu;

class SidebarComponent extends Component {
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
                    <Item key="0">
                        <NavLink to="/">Strona główna</NavLink>
                    </Item>
                    <SubMenu
                        key="knights"
                        title={
                            <span>
                                <Icon type="skin" />
                                Knights and Merchants
                            </span>
                        }
                    >
                        <Item key="1">
                            <NavLink to="/knights">Wprowadzenie</NavLink>
                        </Item>
                        <Item key="2">
                            <NavLink to="/knights/buildings">Budynki</NavLink>
                        </Item>
                        <Item key="3">
                            <NavLink to="/knights/units">Jednostki</NavLink>
                        </Item>
                        <Item key="4">
                            <NavLink to="#">Recenzja</NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu
                        key="tzar"
                        title={
                            <span>
                                <Icon type="crown" />
                                Tzar: Ciężar Korony
                            </span>
                        }
                    >
                        <Item key="5">
                            <NavLink to="/tzar">Wprowadzenie</NavLink>
                        </Item>
                        <Item key="6">
                            <NavLink to="/tzar/nations">Budynki</NavLink>
                        </Item>
                        <Item key="7">
                            <NavLink to="/tzar/units">Jednostki</NavLink>
                        </Item>
                        <Item key="8">
                            <NavLink to="/tzar/spells">Magia</NavLink>
                        </Item>
                        <Item key="9">
                            <NavLink to="/tzar/technologies">
                                Technologie
                            </NavLink>
                        </Item>
                    </SubMenu>
                    <SubMenu
                        key="admin"
                        title={
                            <span>
                                <Icon type="setting" />
                                Administracja
                            </span>
                        }
                    >
                        <Item key="10">
                            <NavLink to="/admin/articles/list">
                                Artykuły
                            </NavLink>
                        </Item>
                        <Item key="11">
                            <NavLink to="/admin/news/list">Wpisy</NavLink>
                        </Item>
                        <Item key="12">
                            <NavLink to="#">Użytkownicy</NavLink>
                        </Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default SidebarComponent;
