import React, { Component } from "react";
import { Layout } from "antd";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import TzarNationsContent from "./components/TzarNationsContent";

class TzarNationsPage extends Component {
    state = {};
    render() {
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <TzarNationsContent />
                    </Layout>
                </Layout>
                <FooterComponent />
            </div>
        );
    }
}

export default TzarNationsPage;