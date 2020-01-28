import React from "react";
import { NavLink } from "react-router-dom";

import routesPaths from "../../../../_config/routesPaths";
import navigationTitles from "../../../../_config/navigationTitles";

import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Item } = Menu;

const { ARTICLES, NEWS, USERS } = routesPaths;
const {
    ADMINISTRATION,
    ADMIN_ARTICLES,
    ADMIN_NEWS,
    ADMIN_USERS
} = navigationTitles;

export default function AdminSubmenu(props) {
    return (
        <SubMenu
            {...props}
            title={
                <span>
                    <Icon type="setting" />
                    {ADMINISTRATION}
                </span>
            }
        >
            <Item key="10">
                <NavLink to={ARTICLES.MAIN}>{ADMIN_ARTICLES}</NavLink>
            </Item>
            <Item key="11">
                <NavLink to={NEWS.MAIN}>{ADMIN_NEWS}</NavLink>
            </Item>
            <Item key="12">
                <NavLink to={USERS.MAIN}>{ADMIN_USERS}</NavLink>
            </Item>
        </SubMenu>
    );
}
