import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import ArticlesEditForm from "../data/ArticlesEditForm";

import { Button, Layout, PageHeader } from "antd";

const { ADMIN_ARTICLES, EDITOR } = navigationTitles;

class ArticleEditor extends Component {
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
                    page={EDITOR}
                />
                <div>
                    <PageHeader
                        onBack={() => window.history.back()}
                        title="Powrót"
                        subTitle="Panel administracyjny"
                        extra={
                            <Button
                                icon="edit"
                                type="primary"
                                htmlType="submit"
                                className="edit-article-button"
                            >
                                Edytuj artykuł{" "}
                            </Button>
                        }
                    />
                </div>
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
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);
