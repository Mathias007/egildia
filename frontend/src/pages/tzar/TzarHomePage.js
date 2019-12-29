import React, { Component } from "react";
import { Layout } from "antd";

import GlobalPageHeader from "../components/GlobalPageHeader";
import GlobalSidebar from "../components/GlobalSidebar";
import GlobalPageFooter from "../components/GlobalPageFooter";

import TzarHomeContent from "./components/TzarHomeContent";

class TzarHomePage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <TzarHomeContent />
                    </Layout>
                </Layout>
                <GlobalPageFooter />
            </div>
        );
    }
}

export default TzarHomePage;