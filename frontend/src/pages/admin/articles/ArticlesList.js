import React, { Component } from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import ArticlesTable from "../data/ArticlesTable";

import { Button, Layout, PageHeader } from "antd";

const componentStyles = {
    layout: { padding: "0 24px 24px" }
};

const componentClassnames = {
    layout: "admin-articles-layout"
};

const { ADMIN_ARTICLES, LIST } = navigationTitles;

class ArticlesList extends Component {
    render() {
        return (
            <Layout
                className={componentClassnames.layout}
                style={componentStyles.layout}
            >
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_ARTICLES}
                    page={LIST}
                />
                <div>
                    <PageHeader
                        title="Lista artykułów"
                        subTitle="Panel administracyjny"
                        extra={
                            <Button
                                icon="file-add"
                                type="primary"
                                className="add-article-button"
                            >
                                <Link to="articles/add"> Dodaj artykuł</Link>
                            </Button>
                        }
                    />
                </div>

                <ArticlesTable />
            </Layout>
        );
    }
}

export default ArticlesList;
