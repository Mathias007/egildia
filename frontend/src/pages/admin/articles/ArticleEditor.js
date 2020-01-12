import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ArticlesEditForm from "../data/ArticlesEditForm";

import { Button, Layout } from "antd";
import styles from "../../../styles/styles";

const { ADMIN_ARTICLES, EDITOR } = navigationTitles;

const buttonData = {
    icon: "edit",
    type: "primary",
    htmlType: "submit",
    form: "edit-article-form",
    text: "Edytuj artykuł"
};

class ArticleEditor extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperArticle(this.props.match.params._id);
    }
    render() {
        const { icon, type, htmlType, form, text } = buttonData;
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
                        <Button
                            icon={icon}
                            type={type}
                            htmlType={htmlType}
                            form={form}
                        >
                            {text}
                        </Button>
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
