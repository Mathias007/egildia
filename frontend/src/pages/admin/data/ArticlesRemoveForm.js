import React, { Component } from "react";
import { connect } from "react-redux";

import { articles } from "../../../_store/_actions";

import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";

import { Form, Layout } from "antd";
import styles from "../../../styles/styles";

const { Content } = Layout;

class ArticlesRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedArticle(this.props.idParam);
    };

    render() {
        const { properArticle } = this.props;
        return (
            <Content style={styles.content}>
                <p>
                    Czy na pewno chcesz usunąć artykuł o tytule{" "}
                    <strong>{properArticle.title}</strong>? Tej operacji nie
                    będzie można cofnąć.
                </p>
                <ButtonComponent
                    composition="double"
                    cancelLink="/admin/articles"
                    cancelText="Zrezygnuj"
                    htmlType="submit"
                    icon="delete"
                    text="Usuń artykuł"
                    type="primary"
                />
                <ErrorMessageComponent errorMessage={this.props.errorMessage} />{" "}
            </Content>
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
        deleteSelectedArticle: id => {
            return dispatch(articles.deleteSelectedArticle(id));
        }
    };
};

ArticlesRemoveForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesRemoveForm);

export default Form.create()(ArticlesRemoveForm);
