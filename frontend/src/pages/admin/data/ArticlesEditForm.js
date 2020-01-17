import React, { Component } from "react";
import { connect } from "react-redux";

import { articles } from "../../../_store/_actions";

import ButtonComponent from "../../components/ButtonComponent";
import SingleFormElement from "../../components/SingleFormElement";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";

import { Form, Layout } from "antd";
import styles from "../../../styles/styles";

const { Content } = Layout;

class ArticleEditForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        let modificationDate = new Date();
        const { validateFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Sent ID:" + this.props.idParam);
                console.log("Received values of form: ", values);
                this.props.editSelectedArticle(
                    this.props.idParam,
                    values.allocationKey,
                    values.title,
                    values.content,
                    values.author,
                    modificationDate
                );
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { properArticle } = this.props;
        return (
            <Content style={styles.content}>
                <Form onSubmit={this.handleSubmit} id="edit-article-form">
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        label="Klucz identyfikacyjny artykułu"
                        fieldName="allocationKey"
                        initialValue={properArticle.allocationKey}
                        inputIcon="key"
                        message="Podaj klucz artykułu!"
                        placeholder="Wpisz unikalny klucz artykułu"
                        required
                        tooltip="Klucz artykułu to nadany przez autora identyfikator tekstowy, który umożliwia wygenerowanie treści w odpowiednim miejscu w serwisie."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        label="Tytuł artykułu"
                        fieldName="title"
                        initialValue={properArticle.title}
                        inputIcon="flag"
                        message="Wpisz tytuł artykułu!"
                        placeholder="Nadaj artykułowi tytuł"
                        required
                        tooltip="Tytuł artykułu, wyświetlany jako nagłówek podstrony zawierającej."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="content"
                        fieldType="text-area"
                        label="Zawartość artykułu"
                        initialValue={properArticle.content}
                        message="Wpisz zawartość artykułu!"
                        placeholder="Daj ponieść się ekspresji..."
                        required
                        rows={8}
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        label="Autor artykułu"
                        fieldName="author"
                        initialValue={properArticle.author}
                        inputIcon="crown"
                        message="Podaj autora artykułu!"
                        placeholder="Podaj autora artykułu"
                        required
                        tooltip="Wpisz nazwę użytkownika, który jest autorem artykułu. Domyślnie jest nim zalogowany użytkownik."
                    />

                    <ButtonComponent
                        composition="double"
                        cancelLink="/admin/articles"
                        cancelText="Zrezygnuj"
                        icon="file-edit"
                        type="primary"
                        htmlType="submit"
                        text="Edytuj artykuł"
                    />

                    <ErrorMessageComponent
                        errorMessage={this.props.errorMessage}
                    />
                </Form>
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
        editSelectedArticle: (
            id,
            allocationKey,
            title,
            content,
            author,
            modificationDate
        ) => {
            return dispatch(
                articles.editSelectedArticle(
                    id,
                    allocationKey,
                    title,
                    content,
                    author,
                    modificationDate
                )
            );
        }
    };
};

ArticleEditForm = connect(mapStateToProps, mapDispatchToProps)(ArticleEditForm);

export default Form.create()(ArticleEditForm);
