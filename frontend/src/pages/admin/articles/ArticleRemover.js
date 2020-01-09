import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import { Button, Divider, Form, Layout, PageHeader } from "antd";

const { Item } = Form;
const { Content } = Layout;

const { ADMIN_ARTICLES, REMOVER } = navigationTitles;

class ArticleRemover extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperArticle(this.props.match.params._id);
    }

    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedArticle(this.props.match.params._id);
    };

    render() {
        const { properArticle } = this.props;

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_ARTICLES}
                    page={REMOVER}
                />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    <div>
                        <PageHeader
                            onBack={() => window.history.back()}
                            title="Powrót"
                            subTitle="Panel administracyjny"
                        />
                    </div>
                    <p>
                        Czy na pewno chcesz usunąć wpis o tytule{" "}
                        <strong>{properArticle.title}</strong>? Tej operacji nie
                        będzie można cofnąć.
                    </p>
                    <Item className="btn-wrap">
                        <Button
                            icon="delete"
                            type="primary"
                            htmlType="submit"
                            className="remove-article-button"
                            onClick={this.handleDeletingSubmit}
                        >
                            Usuń artykuł
                        </Button>
                        <Divider type="vertical" dashed style={{ border: 0 }} />
                        <Button>
                            <Link to="/admin/articles">Zrezygnuj</Link>
                        </Button>{" "}
                    </Item>
                    <Item>{this.props.errorMessage}</Item>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.articles.errorMessage,
        properArticle: state.articles.properArticle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showProperArticle: id => {
            return dispatch(articles.showProperArticle(id));
        },
        deleteSelectedArticle: id => {
            return dispatch(articles.deleteSelectedArticle(id));
        }
    };
};

ArticleRemover = connect(mapStateToProps, mapDispatchToProps)(ArticleRemover);

export default Form.create()(ArticleRemover);
