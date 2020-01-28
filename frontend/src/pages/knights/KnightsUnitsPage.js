import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import PageContentComponent from "../components/universal/PageContentComponent";
import KnightsUnitsTable from "./tables/KnightsUnitsTable";

import { Layout } from "antd";

const { KNIGHTS_AND_MERCHANTS } = navigationTitles;
const { KNIGHTS_UNITS } = allocationKeys;

export default function KnightsUnitsPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                section={KNIGHTS_AND_MERCHANTS}
                page={navigationTitles.KNIGHTS_UNITS}
            />
            <PageHeaderComponent allocationKey={KNIGHTS_UNITS} />
            <PageContentComponent allocationKey={KNIGHTS_UNITS} />
            <KnightsUnitsTable />
        </Layout>
    );
}
