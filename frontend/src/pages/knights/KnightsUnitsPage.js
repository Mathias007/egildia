import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";
import KnightsUnitsTable from "./data/KnightsUnitsTable";

import { Layout } from "antd";
import styles from "../../styles/styles";

const { KNIGHTS_AND_MERCHANTS } = navigationTitles;
const { KNIGHTS_UNITS } = allocationKeys;

class KnightsUnitsPage extends Component {
    state = {
        allocationKey: KNIGHTS_UNITS
    };
    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    section={KNIGHTS_AND_MERCHANTS}
                    page={navigationTitles.KNIGHTS_UNITS}
                />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
                <KnightsUnitsTable />
            </Layout>
        );
    }
}

export default KnightsUnitsPage;
