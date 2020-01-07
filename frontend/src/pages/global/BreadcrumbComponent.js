import React, { Component } from "react";

import navigationTitles from "../../_config/navigationTitles";

import { Breadcrumb } from "antd";

const { Item } = Breadcrumb;

const { WORTAL, ADMINISTRATION } = navigationTitles;

class BreadcrumbComponent extends Component {
    state = {};
    render() {
        const { isAdminContent, section, page } = this.props;
        return (
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Item>{isAdminContent ? ADMINISTRATION : WORTAL}</Item>
                <Item>{section}</Item>
                <Item>{page}</Item>
            </Breadcrumb>
        );
    }
}

export default BreadcrumbComponent;
