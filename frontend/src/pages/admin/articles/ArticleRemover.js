import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ArticlesRemoveForm from "../data/ArticlesRemoveForm";

import { Layout } from "antd";
import styles from "../../../styles/styles";

const { ADMIN_ARTICLES, REMOVER } = navigationTitles;

class ArticleRemover extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperArticle(this.props.match.params._id);
    }

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminComponent
                    section={ADMIN_ARTICLES}
                    page={REMOVER}
                />
                <PageHeaderComponent isAdminComponent />
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleRemover);
