import React, { Component } from "react";

import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import NewsPageContent from "./components/NewsPageContent";

import { Layout } from "antd";
import styles from "../../styles/styles";

const { GENERAL_INDEX } = navigationTitles;

class NewsPage extends Component {
    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent page={GENERAL_INDEX} />
                <NewsPageContent />
            </Layout>
        );
    }
}

export default NewsPage;
