import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import KnightsHomeContent from "./components/KnightsHomeContent";

class KnightsHomePage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <KnightsHomeContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default KnightsHomePage;
