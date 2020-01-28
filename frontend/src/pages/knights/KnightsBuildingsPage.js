import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import PageContentComponent from "../components/universal/PageContentComponent";
import KnightsBuildingsTable from "./tables/KnightsBuildingsTable";

import { Layout } from "antd";

const { KNIGHTS_AND_MERCHANTS } = navigationTitles;
const { KNIGHTS_BUILDINGS } = allocationKeys;

export default function KnightsBuildingsPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                section={KNIGHTS_AND_MERCHANTS}
                page={navigationTitles.KNIGHTS_BUILDINGS}
            />
            <PageHeaderComponent allocationKey={KNIGHTS_BUILDINGS} />
            <PageContentComponent allocationKey={KNIGHTS_BUILDINGS} />
            <KnightsBuildingsTable />
        </Layout>
    );
}
