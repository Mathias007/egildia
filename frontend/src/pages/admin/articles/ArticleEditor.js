import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";
import serverStatuses from "../../../_config/serverStatuses";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/universal/PageHeaderComponent";
import ButtonComponent from "../../components/universal/ButtonComponent";
import ArticlesEditForm from "../components/articles/ArticlesEditForm";

import { Layout } from "antd";

const { ADMIN_ARTICLES, EDITOR } = navigationTitles;
const { STATUS_OK } = serverStatuses;

class ArticleEditor extends Component {
    componentDidMount() {
        this.props.showProperArticle(this.props.match.params._id);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.status !== this.props.status &&
            this.props.status === STATUS_OK
        ) {
            this.props.showProperArticle(this.props.match.params._id);
        }
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
    return {
        status: state.articles.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showProperArticle: id => {
            return dispatch(articles.showProperArticle(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);
