import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ArticlesAddForm from "../data/ArticlesAddForm";

import { Button, Layout } from "antd";

const { ADMIN_ARTICLES, CREATOR } = navigationTitles;

const buttonData = {
    icon: "file-add",
    type: "primary",
    htmlType: "submit",
    form: "add-article-form",
    text: "Dodaj artykuł"
};

class ArticleCreator extends Component {
    render() {
        const { icon, type, htmlType, form, text } = buttonData;
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminComponent
                    section={ADMIN_ARTICLES}
                    page={CREATOR}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <Button
                            icon={icon}
                            type={type}
                            htmlType={htmlType}
                            form={form}
                        >
                            {text}
                        </Button>
                    }
                />
                <ArticlesAddForm />
            </Layout>
        );
    }
}

export default ArticleCreator;
