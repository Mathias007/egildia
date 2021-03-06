import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import PageContentComponent from "../components/universal/PageContentComponent";
import TzarSpellsTable from "./tables/TzarSpellsTable";

import { Layout } from "antd";

const { TZAR_BURDEN_CROWN } = navigationTitles;
const { TZAR_SPELLS } = allocationKeys;

export default function TzarSpellsPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                section={TZAR_BURDEN_CROWN}
                page={navigationTitles.TZAR_SPELLS}
            />
            <PageHeaderComponent allocationKey={TZAR_SPELLS} />
            <PageContentComponent allocationKey={TZAR_SPELLS} />
            <TzarSpellsTable />
        </Layout>
    );
}
