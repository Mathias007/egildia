import React, { Component } from "react";
import { Layout } from "antd";

import GlobalPageHeader from "../components/GlobalPageHeader";
import GlobalSidebar from "../components/GlobalSidebar";
import GlobalPageFooter from "../components/GlobalPageFooter";

import TzarNationsContent from "./components/TzarNationsContent";

class TzarNationsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <TzarNationsContent />
                    </Layout>
                </Layout>
                <GlobalPageFooter />
            </div>
        );
    }
}

export default TzarNationsPage;