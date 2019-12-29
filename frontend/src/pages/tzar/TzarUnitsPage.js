import React, { Component } from "react";
import { Layout } from "antd";

import GlobalPageHeader from "../components/GlobalPageHeader";
import GlobalSidebar from "../components/GlobalSidebar";
import GlobalPageFooter from "../components/GlobalPageFooter";

import TzarUnitsContent from "./components/TzarUnitsContent";

class TzarUnitsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <TzarUnitsContent />
                    </Layout>
                </Layout>
                <GlobalPageFooter />
            </div>
        );
    }
}

export default TzarUnitsPage;