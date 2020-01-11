import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import ArticlesAddForm from "../data/ArticlesAddForm";

import { Button, Layout, PageHeader } from "antd";

const { ADMIN_ARTICLES, CREATOR } = navigationTitles;

class ArticleCreator extends Component {
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_ARTICLES}
                    page={CREATOR}
                />
                <div>
                    <PageHeader
                        onBack={() => window.history.back()}
                        title="Powrót"
                        subTitle="Panel administracyjny"
                        extra={
                            <Button
                                icon="file-add"
                                type="primary"
                                htmlType="submit"
                                className="create-article-button"
                            >
                                Dodaj artykuł{" "}
                            </Button>
                        }
                    />
                </div>
                <ArticlesAddForm />
            </Layout>
        );
    }
}

export default ArticleCreator;
