import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import routesPaths from "../../_config/routesPaths";
const { GENERAL, ARTICLES, NEWS, KNIGHTS, TZAR } = routesPaths;

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
                        <NavLink to={GENERAL.INDEX}>Strona główna</NavLink>
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
                            <NavLink to={KNIGHTS.MAIN}>Wprowadzenie</NavLink>
                        </Item>
                        <Item key="2">
                            <NavLink to={KNIGHTS.BUILDINGS}>Budynki</NavLink>
                        </Item>
                        <Item key="3">
                            <NavLink to={KNIGHTS.UNITS}>Jednostki</NavLink>
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
                            <NavLink to={TZAR.MAIN}>Wprowadzenie</NavLink>
                        </Item>
                        <Item key="6">
                            <NavLink to={TZAR.NATIONS}>Budynki</NavLink>
                        </Item>
                        <Item key="7">
                            <NavLink to={TZAR.UNITS}>Jednostki</NavLink>
                        </Item>
                        <Item key="8">
                            <NavLink to={TZAR.SPELLS}>Magia</NavLink>
                        </Item>
                        <Item key="9">
                            <NavLink to={TZAR.TECHNOLOGIES}>
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
                            <NavLink to={ARTICLES.MAIN}>Artykuły</NavLink>
                        </Item>
                        <Item key="11">
                            <NavLink to={NEWS.MAIN}>Wpisy</NavLink>
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
