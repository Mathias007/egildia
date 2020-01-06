import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { articles } from "../../_store/_actions";

import { PageHeader, Descriptions } from "antd";

class PageHeaderComponent extends Component {
    componentDidMount() {
        console.log(this.props.allocationKey);
        const { allocationKey, showAllocatedArticle } = this.props;
        showAllocatedArticle(allocationKey);
    }
    render() {
        const { author, date, title } = this.props.article;
        return (
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={title}

                // opcje administracyjne (edycja/delecja) do rozważenia
            >
                <Descriptions size="small" column={2}>
                    <Descriptions.Item label="Dodano">
                        {moment(date).format("LLLL")}
                    </Descriptions.Item>
                    <Descriptions.Item label="Autor">
                        {author}
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
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
)(PageHeaderComponent);
