import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";
import TzarNationsTable from "./data/TzarNationsTable";

import { Layout } from "antd";
import styles from "../../styles/styles";

const { TZAR_BURDEN_CROWN } = navigationTitles;
const { TZAR_NATIONS } = allocationKeys;

class TzarNationsPage extends Component {
    state = {
        allocationKey: TZAR_NATIONS
    };
    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    section={TZAR_BURDEN_CROWN}
                    page={navigationTitles.TZAR_NATIONS}
                />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
                <TzarNationsTable />
            </Layout>
        );
    }
}

export default TzarNationsPage;
