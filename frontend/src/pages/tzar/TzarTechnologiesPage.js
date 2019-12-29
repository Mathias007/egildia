import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import TzarTechnologiesContent from "./components/TzarTechnologiesContent";

class TzarTechnologiesPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <TzarTechnologiesContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default TzarTechnologiesPage;
