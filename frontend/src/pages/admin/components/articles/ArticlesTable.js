import React, { Component } from "react";
import { connect } from "react-redux";

import { articles } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import { articlesColumnsStructure } from "./articlesColumnsStructure";

import { Layout, Table } from "antd";
const { Content } = Layout;

class ArticlesTable extends Component {
    state = {
        tableData: [],
        tableColumns: []
    };

    componentDidMount() {
        this.props.showArticlesList();
        console.log(this.props.articles);
    }

    componentDidUpdate(prevProps) {
        if (this.props.articles.length !== prevProps.articles.length) {
            this.props.showArticlesList();
        }
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
        let { tableColumns, tableData } = this.state;

        tableData = this.renderArticles();
        tableColumns = articlesColumnsStructure;

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
            </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesTable);
