import React, { Component } from "react";

import allocationKeys from "../../_config/allocationKeys";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import PageContentComponent from "../components/PageContentComponent";

import TzarUnitsTable from "./data/TzarUnitsTable";
import { Layout } from "antd";

const { TZAR_UNITS } = allocationKeys;

class TzarUnitsPage extends Component {
    state = {
        allocationKey: TZAR_UNITS
    };
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
                <PageHeaderComponent allocationKey={this.state.allocationKey} />
                <PageContentComponent
                    allocationKey={this.state.allocationKey}
                />
                <TzarUnitsTable />
            </Layout>
        );
    }
}

export default TzarUnitsPage;
