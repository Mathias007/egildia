import React from "react";
import { NavLink } from "react-router-dom";

import routesPaths from "../../../../_config/routesPaths";
import navigationTitles from "../../../../_config/navigationTitles";

import { Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Item } = Menu;

const { TZAR } = routesPaths;
const {
    TZAR_BURDEN_CROWN,
    TZAR_MAIN,
    TZAR_NATIONS,
    TZAR_SPELLS,
    TZAR_TECHNOLOGIES,
    TZAR_UNITS
} = navigationTitles;

export default function TzarSubmenu(props) {
    return (
        <SubMenu
            {...props}
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
                <NavLink to={TZAR.TECHNOLOGIES}>{TZAR_TECHNOLOGIES}</NavLink>
            </Item>
        </SubMenu>
    );
}
