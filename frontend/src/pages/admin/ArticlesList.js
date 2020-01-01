import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Table } from "antd";

import { articles } from "../../_store/_actions";

// import HeaderComponent from "../global/HeaderComponent";
// import SidebarComponent from "../global/SidebarComponent";
// import FooterComponent from "../global/FooterComponent";

import BreadcrumbComponent from "../global/BreadcrumbComponent";

const componentStyles = {
    content: {
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
    },
    layout: { padding: "0 24px 24px" }
};

const componentClassnames = {
    content: "admin-articles-content",
    layout: "admin-articles-layout",
    table: "admin-articles-table"
};

class ArticlesList extends Component {
    state = {
        columnsStructure: {
            col_allocation: {
                title: "Klucz artykułu",
                dataIndex: "allocationKey",
                align: "center"
            },
            col_title: { title: "Tytuł", dataIndex: "title", align: "left" },
            col_content: {
                title: "Treść",
                dataIndex: "content",
                align: "center"
            },
            col_author: {
                title: "Autor",
                dataIndex: "author",
                align: "center"
            },
            col_date: { title: "Data utworzenia", dataIndex: "date" }
        },
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showArticlesList();
        console.log(this.props.articles);
    }

    renderArticles() {
        let { articles } = this.props;

        if (articles) {
            return articles.map((article, index) => {
                const {
                    _id,
                    allocationKey,
                    title,
                    content,
                    author,
                    date
                } = article;
                
                return {
                    key: _id,
                    allocationKey,
                    title,
                    content,
                    author,
                    date
                };
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        tableData = this.renderArticles();

        const {
            col_allocation,
            col_title,
            col_content,
            col_author,
            col_date
        } = this.state.columnsStructure;

        tableColumns = [
            {
                title: col_allocation.title,
                dataIndex: col_allocation.dataIndex,
                align: col_allocation.align
            },
            {
                title: col_title.title,
                dataIndex: col_title.dataIndex,
                align: col_title.align
            },
            {
                title: col_content.title,
                dataIndex: col_content.dataIndex,
                align: col_content.align
            },
            {
                title: col_author.title,
                dataIndex: col_author.dataIndex,
                align: col_author.align
            },
            {
                title: col_date.title,
                dataIndex: col_date.dataIndex,
                align: col_date.align
            }
        ];

        return (
            <Layout
                className={componentClassnames.layout}
                style={componentStyles.layout}
            >
                <BreadcrumbComponent />
                <Content
                    className={componentClassnames.content}
                    style={componentStyles.content}
                >
                    <h1>Panel admina</h1>
                    <h2>Lista artykułów</h2>

                    <Table
                        className={componentClassnames.table}
                        dataSource={tableData}
                        columns={tableColumns}
                    />
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showArticlesList: () => dispatch(articles.showArticlesList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
