import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import TzarHomeContent from "./components/TzarHomeContent";

class TzarHomePage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <TzarHomeContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default TzarHomePage;