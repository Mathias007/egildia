import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { articles } from "../../../_store/_actions";
import navigationTitles from "../../../_config/navigationTitles";

import { Descriptions } from "antd";
import { PageHeader } from "@ant-design/pro-layout"

const { ADMIN_PANEL, ADMIN_BACK } = navigationTitles;

class PageHeaderComponent extends Component {
    componentDidMount() {
        console.log(this.props.allocationKey);
        const { allocationKey, showAllocatedArticle } = this.props;
        showAllocatedArticle(allocationKey);
    }

    handleBackLink = () => window.history.back();

    render() {
        console.log(this.props.isAdminComponent);
        if (this.props.isAdminComponent) {
            const { button } = this.props;
            return (
                <PageHeader
                    ghost={false}
                    onBack={this.handleBackLink}
                    title={ADMIN_BACK}
                    subTitle={ADMIN_PANEL}
                    extra={button}
                />
            );
        } else if (this.props.shortHeader) {
            const { title } = this.props;
            return <PageHeader title={title} ghost={false} />;
        } else {
            const { author, date, title } = this.props.article;

            return (
                <PageHeader
                    ghost={false}
                    onBack={this.handleBackLink}
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
