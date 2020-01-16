import React from "react";
import { NavLink } from "react-router-dom";

import routesPaths from "../../../_config/routesPaths";
import navigationTitles from "../../../_config/navigationTitles";

import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Item } = Menu;

const { KNIGHTS } = routesPaths;
const {
    KNIGHTS_AND_MERCHANTS,
    KNIGHTS_MAIN,
    KNIGHTS_BUILDINGS,
    KNIGHTS_UNITS,
    KNIGHTS_REVIEW
} = navigationTitles;

function KnightsSubmenu(props) {
    console.log(props);

    return (
        <SubMenu
            {...props}
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
                <NavLink to={KNIGHTS.BUILDINGS}>{KNIGHTS_BUILDINGS}</NavLink>
            </Item>
            <Item key="3">
                <NavLink to={KNIGHTS.UNITS}>{KNIGHTS_UNITS}</NavLink>
            </Item>
            <Item key="4">
                <NavLink to="#">{KNIGHTS_REVIEW}</NavLink>
            </Item>
        </SubMenu>
    );
}

export default KnightsSubmenu;
