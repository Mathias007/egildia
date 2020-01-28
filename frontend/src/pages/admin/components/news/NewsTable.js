import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../../../../_store/_actions";
import styles from "../../../../styles/styles";

import { newsColumnsStructure } from "../_helpers/articlesColumnsStructure";

import { Layout, Table } from "antd";
const { Content } = Layout;

class NewsTable extends Component {
    state = {
        tableColumns: [],
        tableData: []
    };

    componentDidMount() {
        this.props.showNewsList();
        console.log(this.props.news);
    }

    componentDidUpdate(prevProps) {
        if (this.props.news.length !== prevProps.news.length) {
            this.props.showNewsList();
        }
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
        let { tableColumns, tableData } = this.state;

        tableData = this.renderNews();
        tableColumns = newsColumnsStructure;

        return (
            <Content style={styles.content}>
                <Table dataSource={tableData} columns={tableColumns} />
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
