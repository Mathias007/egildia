import React from "react";

import styles from "../../../styles/styles";

import { Layout } from "antd";
const { Footer } = Layout;

export default function FooterComponent(props) {
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
