import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import ArticlesEditForm from "../data/ArticlesEditForm";

import { Layout } from "antd";

const { ADMIN_ARTICLES, EDITOR } = navigationTitles;

class ArticleEditor extends Component {
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
                    page={EDITOR}
                />

                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <ButtonComponent
                        composition="nowrap"
                        icon="edit"
                        type="primary"
                        htmlType="submit"
                        form="edit-article-form"
                        text="Edytuj artykuł"
                    />
                    }
                />

                <ArticlesEditForm idParam={this.props.match.params._id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);
