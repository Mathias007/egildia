import React from "react";
import { NavLink } from "react-router-dom";

import routesPaths from "../../../_config/routesPaths";
import navigationTitles from "../../../_config/navigationTitles";

import { Menu, Icon } from "antd";
const { Item } = Menu;

const { GENERAL } = routesPaths;
const { GENERAL_INDEX } = navigationTitles;

function AdminSubmenu(props) {
    console.log(props);

    return (
        <Item {...props} key="0">
            <NavLink to={GENERAL.INDEX}>
                <Icon type="pie-chart" />
                <span> {GENERAL_INDEX}</span>
            </NavLink>
        </Item>
    );
}

export default AdminSubmenu;
