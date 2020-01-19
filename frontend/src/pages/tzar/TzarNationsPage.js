import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";
import NationsTable from "./data/NationsTable";

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
            <NationsTable />
        </Layout>
    );
}
