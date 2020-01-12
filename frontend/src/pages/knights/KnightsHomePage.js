import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";

import { Layout } from "antd";
import styles from "../../styles/styles";

const { KNIGHTS_AND_MERCHANTS } = navigationTitles;
const { KNIGHTS_HOME } = allocationKeys;

class KnightsHomePage extends Component {
    state = {
        allocationKey: KNIGHTS_HOME
    };

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    section={KNIGHTS_AND_MERCHANTS}
                    page={navigationTitles.KNIGHTS_MAIN}
                />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
            </Layout>
        );
    }
}

export default KnightsHomePage;
