import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import { Button, Layout, Table, Divider, Icon, PageHeader } from "antd";

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

const { ADMIN_ARTICLES, LIST } = navigationTitles;

class ArticlesList extends Component {
    state = {
        columnsStructure: {
            col_number: {
                title: "LP",
                dataIndex: "number",
                align: "center"
            },
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
            col_date: { title: "Data utworzenia", dataIndex: "date" },
            col_options: { title: "Opcje", dataIndex: "options" }
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
                    number: index,
                    key: _id,
                    allocationKey,
                    title,
                    content,
                    author,
                    date,
                    options: _id
                };
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        tableData = this.renderArticles();

        const {
            col_number,
            col_allocation,
            col_title,
            col_content,
            col_author,
            col_date,
            col_options
        } = this.state.columnsStructure;

        tableColumns = [
            {
                title: col_number.title,
                dataIndex: col_number.dataIndex,
                align: col_number.align
            },
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
                align: col_date.align,
                render: date => moment(date).format("LLLL")
            },
            {
                title: col_options.title,
                dataIndex: col_options.dataIndex,
                align: col_options.align,
                render: _id => (
                    <>
                        <Divider type="vertical" />
                        <Link to={`articles/edit/${_id}`}>
                            <Icon type="edit" />
                        </Link>
                        <Divider type="vertical" />
                        <Link to={`articles/remove/${_id}`}>
                            <Icon type="delete" />
                        </Link>
                    </>
                )
            }
        ];

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
                <Content
                    className={componentClassnames.content}
                    style={componentStyles.content}
                >
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
                                    <Link to="articles/add">
                                        {" "}
                                        Dodaj artykuł
                                    </Link>
                                </Button>
                            }
                        />
                    </div>

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
