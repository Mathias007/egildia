import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import PageContentComponent from "../components/universal/PageContentComponent";
import TzarUnitsTable from "./tables/TzarUnitsTable";

import { Layout } from "antd";

const { TZAR_BURDEN_CROWN } = navigationTitles;
const { TZAR_UNITS } = allocationKeys;

export default function TzarUnitsPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                section={TZAR_BURDEN_CROWN}
                page={navigationTitles.TZAR_UNITS}
            />
            <PageHeaderComponent allocationKey={TZAR_UNITS} />
            <PageContentComponent allocationKey={TZAR_UNITS} />
            <TzarUnitsTable />
        </Layout>
    );
}
