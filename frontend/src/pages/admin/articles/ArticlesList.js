import React from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import ArticlesTable from "../data/ArticlesTable";

import { Layout } from "antd";

const { ADMIN_ARTICLES, LIST } = navigationTitles;

export default function ArticlesList(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                isAdminComponent
                section={ADMIN_ARTICLES}
                page={LIST}
            />
            <PageHeaderComponent
                isAdminComponent
                button={
                    <Link to="articles/add">
                        <ButtonComponent
                            icon="file-add"
                            type="primary"
                            text="Dodaj artykuł"
                        />
                    </Link>
                }
            />
            <ArticlesTable />
        </Layout>
    );
}
