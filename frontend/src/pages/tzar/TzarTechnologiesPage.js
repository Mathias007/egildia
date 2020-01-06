import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";

import TzarTechnologiesTable from "./data/TzarTechnologiesTable";
import { Layout } from "antd";

const { TZAR_TECHNOLOGIES } = allocationKeys;

class TzarTechnologiesPage extends Component {
    state = {
        allocationKey: TZAR_TECHNOLOGIES
    };
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
                <TzarTechnologiesTable />
            </Layout>
        );
    }
}

export default TzarTechnologiesPage;
