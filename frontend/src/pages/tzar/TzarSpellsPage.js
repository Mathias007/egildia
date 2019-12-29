import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import TzarSpellsContent from "./components/TzarSpellsContent";

class TzarSpellsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <TzarSpellsContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default TzarSpellsPage;