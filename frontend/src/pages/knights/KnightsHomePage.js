import React from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import PageContentComponent from "../components/universal/PageContentComponent";

import { Layout } from "antd";

const { KNIGHTS_AND_MERCHANTS } = navigationTitles;
const { KNIGHTS_HOME } = allocationKeys;

export default function KnightsHomePage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                section={KNIGHTS_AND_MERCHANTS}
                page={navigationTitles.KNIGHTS_MAIN}
            />
            <PageHeaderComponent allocationKey={KNIGHTS_HOME} />
            <PageContentComponent allocationKey={KNIGHTS_HOME} />
        </Layout>
    );
}
