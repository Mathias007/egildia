import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import KnightsBuildingsContent from "./components/KnightsBuildingsContent";

class KnightsBuildingsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <KnightsBuildingsContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default KnightsBuildingsPage;
