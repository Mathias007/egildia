import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";
import SpellsTable from "./data/SpellsTable";

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
            <SpellsTable />
        </Layout>
    );
}
