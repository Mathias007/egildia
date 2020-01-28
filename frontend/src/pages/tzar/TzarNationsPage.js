import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import PageContentComponent from "../components/universal/PageContentComponent";
import TzarNationsTable from "./tables/TzarNationsTable";

import { Layout } from "antd";

const { TZAR_BURDEN_CROWN } = navigationTitles;
const { TZAR_NATIONS } = allocationKeys;

export default function TzarNationsPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                section={TZAR_BURDEN_CROWN}
                page={navigationTitles.TZAR_NATIONS}
            />
            <PageHeaderComponent allocationKey={TZAR_NATIONS} />
            <PageContentComponent allocationKey={TZAR_NATIONS} />
            <TzarNationsTable />
        </Layout>
    );
}
