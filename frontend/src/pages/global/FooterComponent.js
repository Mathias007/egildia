import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class FooterComponent extends Component {
    render() {
        return (
            <Footer style={{ textAlign: "center" }}>
                egildia.pl © 2019-2020 Mateusz Mathias Stawowski
            </Footer>
        );
    }
}

export default FooterComponent;
