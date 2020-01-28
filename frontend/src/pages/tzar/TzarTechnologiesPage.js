import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import PageContentComponent from "../components/universal/PageContentComponent";
import TzarTechnologiesTable from "./tables/TzarTechnologiesTable";

import { Layout } from "antd";

const { TZAR_BURDEN_CROWN } = navigationTitles;
const { TZAR_TECHNOLOGIES } = allocationKeys;

export default function TzarTechnologiesPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                section={TZAR_BURDEN_CROWN}
                page={navigationTitles.TZAR_TECHNOLOGIES}
            />
            <PageHeaderComponent allocationKey={TZAR_TECHNOLOGIES} />
            <PageContentComponent allocationKey={TZAR_TECHNOLOGIES} />
            <TzarTechnologiesTable />
        </Layout>
    );
}
