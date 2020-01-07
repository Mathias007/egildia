import React, { Component } from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

import { articles } from "../../_store/_actions";

import { Card, Layout } from "antd";
const { Content } = Layout;

class PageContentComponent extends Component {
    componentDidMount() {
        console.log(this.props.allocationKey);
        const { allocationKey, showAllocatedArticle } = this.props;
        showAllocatedArticle(allocationKey);
    }

    render() {
        const { content } = this.props.article;
        return (
            <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                }}
            >
                <Card>{ReactHtmlParser(content)}</Card>
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        article: state.articles.properArticle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showAllocatedArticle: allocationKey => {
            return dispatch(articles.showAllocatedArticle(allocationKey));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContentComponent);
