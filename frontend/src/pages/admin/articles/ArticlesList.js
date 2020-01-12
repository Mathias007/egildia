import React, { Component } from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ArticlesTable from "../data/ArticlesTable";

import { Button, Layout } from "antd";

const componentStyles = {
    layout: { padding: "0 24px 24px" }
};

const componentClassnames = {
    layout: "admin-articles-layout"
};

const { ADMIN_ARTICLES, LIST } = navigationTitles;

const buttonData = {
    icon: "file-add",
    type: "primary",
    text: "Dodaj artykuł"
};

class ArticlesList extends Component {
    render() {
        const { icon, type, text } = buttonData;
        return (
            <Layout
                className={componentClassnames.layout}
                style={componentStyles.layout}
            >
                <BreadcrumbComponent
                    isAdminComponent
                    section={ADMIN_ARTICLES}
                    page={LIST}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <Link to="articles/add">
                            <Button icon={icon} type={type}>
                                {text}
                            </Button>
                        </Link>
                    }
                />
                <ArticlesTable />
            </Layout>
        );
    }
}

export default ArticlesList;
