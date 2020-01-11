import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { news } from "../../../_store/_actions";

import { Divider, Icon, Layout, Table } from "antd";

const componentStyles = {
    content: {
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 280
    }
};

const componentClassnames = {
    content: "admin-news-content",
    table: "admin-news-table"
};

class NewsTable extends Component {
    state = {
        columnsStructure: {
            col_number: {
                title: "LP",
                dataIndex: "number",
                align: "center"
            },
            col_category: {
                title: "Kategoria",
                dataIndex: "category",
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
        this.props.showNewsList();
        console.log(this.props.news);
    }

    renderNews() {
        let { news } = this.props;

        if (news) {
            return news.map((singleNews, index) => {
                const {
                    _id,
                    title,
                    content,
                    author,
                    date,
                    category
                } = singleNews;

                return {
                    number: index,
                    key: _id,
                    title,
                    content,
                    author,
                    date,
                    category,
                    options: _id
                };
            });
        }
    }

    render() {
        const { Content } = Layout;

        let { tableColumns, tableData } = this.state;

        tableData = this.renderNews();

        const {
            col_number,
            col_category,
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
                title: col_category.title,
                dataIndex: col_category.dataIndex,
                align: col_category.align
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
                        <Link to={`news/edit/${_id}`}>
                            <Icon type="edit" />
                        </Link>
                        <Divider type="vertical" />
                        <Link to={`news/remove/${_id}`}>
                            <Icon type="delete" />
                        </Link>
                    </>
                )
            }
        ];

        return (
            <Content
                className={componentClassnames.content}
                style={componentStyles.content}
            >
                <Table
                    className={componentClassnames.table}
                    dataSource={tableData}
                    columns={tableColumns}
                />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showNewsList: () => dispatch(news.showNewsList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsTable);
