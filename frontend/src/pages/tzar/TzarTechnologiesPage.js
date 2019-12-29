import React, { Component } from "react";
import { Layout } from "antd";

import GlobalPageHeader from "../components/GlobalPageHeader";
import GlobalSidebar from "../components/GlobalSidebar";
import GlobalPageFooter from "../components/GlobalPageFooter";

import TzarTechnologiesContent from "./components/TzarTechnologiesContent";

class TzarTechnologiesPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <TzarTechnologiesContent />
                    </Layout>
                </Layout>
                <GlobalPageFooter />
            </div>
        );
    }
}

export default TzarTechnologiesPage;