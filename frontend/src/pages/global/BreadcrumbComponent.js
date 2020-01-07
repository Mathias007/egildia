import React, { Component } from "react";

import navigationTitles from "../../_config/navigationTitles";

import { Breadcrumb } from "antd";

const { Item } = Breadcrumb;

const {WORTAL} = navigationTitles;

class BreadcrumbComponent extends Component {
    state = {};
    render() {
        return (
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Item>{WORTAL}</Item>
                <Item>{this.props.section}</Item>
                <Item>{this.props.page}</Item>
            </Breadcrumb>
        );
    }
}

export default BreadcrumbComponent;
