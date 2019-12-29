import React, { Component } from "react";
import { Layout } from "antd";

import GlobalPageHeader from "../components/GlobalPageHeader";
import GlobalSidebar from "../components/GlobalSidebar";
import GlobalPageFooter from "../components/GlobalPageFooter";

import TzarSpellsContent from "./components/TzarSpellsContent";

class TzarSpellsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <TzarSpellsContent />
                    </Layout>
                </Layout>
                <GlobalPageFooter />
            </div>
        );
    }
}

export default TzarSpellsPage;