import React from "react";

import navigationTitles from "../../../_config/navigationTitles";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import ArticlesAddForm from "../data/ArticlesAddForm";

import { Layout } from "antd";

const { ADMIN_ARTICLES, CREATOR } = navigationTitles;

export default function ArticleCreator(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                isAdminComponent
                section={ADMIN_ARTICLES}
                page={CREATOR}
            />
            <PageHeaderComponent
                isAdminComponent
                button={
                    <ButtonComponent
                        composition="nowrap"
                        icon="file-add"
                        type="primary"
                        htmlType="submit"
                        form="add-article-form"
                        text="Dodaj artykuł"
                    />
                }
            />
            <ArticlesAddForm />
        </Layout>
    );
}
