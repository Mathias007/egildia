import React, { Component } from "react";
import { Layout } from "antd";

import BreadcrumbGlobalComponent from "./components/BreadcrumbGlobalComponent";

const { Content } = Layout;

class KnightsHomePageContent extends Component {
    state = {};
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbGlobalComponent />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    Witaj na podstronie e-Gildii Graczy poświęconej grze Knights
                    and Merchants. Znajdziesz tutaj pożyteczne teksty, pliki i
                    materiały. W opracowaniach uwzględniamy zarówno wersję
                    podstawową The Shattered Kingdom, jak i dodatek The Peasant
                    Rebellion oraz modyfikację K&M Remake.
                </Content>
            </Layout>
        );
    }
}

export default KnightsHomePageContent;
