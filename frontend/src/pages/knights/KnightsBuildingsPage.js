import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";

import KnightsBuildingsTable from "./data/KnightsBuildingsTable";
import { Layout } from "antd";

const { KNIGHTS_BUILDINGS } = allocationKeys;

class KnightsBuildingsPage extends Component {
    state = {
        allocationKey: KNIGHTS_BUILDINGS
    };
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
                <KnightsBuildingsTable />
            </Layout>
        );
    }
}

export default KnightsBuildingsPage;
