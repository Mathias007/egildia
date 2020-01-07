import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";
import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";

import { Layout } from "antd";

const { TZAR_BURDEN_CROWN } = navigationTitles;
const { TZAR_HOME } = allocationKeys;

class TzarHomePage extends Component {
    state = {
        allocationKey: TZAR_HOME
    };

    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    section={TZAR_BURDEN_CROWN}
                    page={navigationTitles.TZAR_MAIN}
                />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
            </Layout>
        );
    }
}

export default TzarHomePage;
