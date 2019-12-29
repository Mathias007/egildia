import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import KnightsUnitsContent from "./components/KnightsUnitsContent";

class KnightsUnitsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <KnightsUnitsContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default KnightsUnitsPage;
