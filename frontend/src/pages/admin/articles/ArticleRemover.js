import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import ArticlesRemoveForm from "../data/ArticlesRemoveForm";

import { Layout, PageHeader } from "antd";

const { ADMIN_ARTICLES, REMOVER } = navigationTitles;

class ArticleRemover extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperArticle(this.props.match.params._id);
    }

    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_ARTICLES}
                    page={REMOVER}
                />
                    <div>
                        <PageHeader
                            onBack={() => window.history.back()}
                            title="Powrót"
                            subTitle="Panel administracyjny"
                        />
                    </div>
                    <ArticlesRemoveForm idParam={this.props.match.params._id} /> 
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showProperArticle: id => {
            return dispatch(articles.showProperArticle(id));
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleRemover);
