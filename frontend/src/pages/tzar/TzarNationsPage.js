import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";

import TzarNationsTable from "./data/TzarNationsTable";
import { Layout } from "antd";

const { TZAR_NATIONS } = allocationKeys;

class TzarNationsPage extends Component {
    state = {
        allocationKey: TZAR_NATIONS
    };
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
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
