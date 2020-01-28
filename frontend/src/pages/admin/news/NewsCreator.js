import React from "react";

import navigationTitles from "../../../_config/navigationTitles";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/universal/PageHeaderComponent";
import ButtonComponent from "../../components/universal/ButtonComponent";
import NewsAddForm from "../components/news/NewsAddForm";

import { Layout } from "antd";

const { ADMIN_NEWS, CREATOR } = navigationTitles;

export default function NewsCreator(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                isAdminComponent
                section={ADMIN_NEWS}
                page={CREATOR}
            />
            <PageHeaderComponent
                isAdminComponent
                button={
                    <ButtonComponent
                        form="add-news-form"
                        htmlType="submit"
                        icon="file-add"
                        text="Dodaj wpis"
                        type="primary"
                    />
                }
            />
            <NewsAddForm />
        </Layout>
    );
}
