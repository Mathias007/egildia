import React from "react";

import navigationTitles from "../../_config/navigationTitles";

import { Breadcrumb } from "antd";
import styles from "../../styles/styles";

const { Item } = Breadcrumb;
const { WORTAL, ADMINISTRATION } = navigationTitles;

function BreadcrumbComponent(props) {
    const { isAdminComponent, section, page } = props;
    return (
        <Breadcrumb style={styles.breadcrumb}>
            <Item>{isAdminComponent ? ADMINISTRATION : WORTAL}</Item>
            <Item>{section}</Item>
            <Item>{page}</Item>
        </Breadcrumb>
    );
}

export default BreadcrumbComponent;
