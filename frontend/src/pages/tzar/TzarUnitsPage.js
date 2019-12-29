import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import TzarUnitsContent from "./components/TzarUnitsContent";

class TzarUnitsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <TzarUnitsContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default TzarUnitsPage;