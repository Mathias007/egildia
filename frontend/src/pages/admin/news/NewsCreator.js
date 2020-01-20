import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import NewsAddForm from "../data/NewsAddForm";

import { Layout } from "antd";

const { ADMIN_NEWS, CREATOR } = navigationTitles;

class NewsCreator extends Component {
    render() {
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
}

export default NewsCreator;
