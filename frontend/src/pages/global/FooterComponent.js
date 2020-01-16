import React from "react";

import { Layout } from "antd";
import styles from "../../styles/styles";

const { Footer } = Layout;

function FooterComponent(props) {
    const generateActualYear = () => {
        return new Date().getFullYear();
    };

    return (
        <Footer style={styles.footer}>
            <p>
                © 2019-{generateActualYear()}{" "}
                <a href="https://egildia.pl">egildia.pl</a>
                <br />
                Created by Mateusz Mathias Stawowski
            </p>
        </Footer>
    );
}

export default FooterComponent;
