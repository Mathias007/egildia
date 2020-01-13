import React, { Component } from "react";
import { Layout } from "antd";
import styles from "../../styles/styles";

const { Footer } = Layout;

class FooterComponent extends Component {
    render() {
        return (
            <Footer style={styles.footer}>
                egildia.pl © 2019-2020 Mateusz Mathias Stawowski
            </Footer>
        );
    }
}

export default FooterComponent;
