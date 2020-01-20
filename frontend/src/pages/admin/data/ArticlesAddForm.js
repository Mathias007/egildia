import React, { Component } from "react";
import { connect } from "react-redux";

import { articles } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import SingleFormElement from "../../components/SingleFormElement";
import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";

import { Form, Layout } from "antd";
const { Content } = Layout;

class ArticlesAddForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const { validateFields, resetFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.addNewArticle(
                    values.allocationKey,
                    values.title,
                    values.content,
                    values.author,
                    values.date
                );
                resetFields();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Content style={styles.content}>
                <Form onSubmit={this.handleSubmit} id="add-article-form">
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="allocationKey"
                        inputIcon="key"
                        label="Klucz identyfikacyjny artykułu"
                        message="Podaj klucz artykułu!"
                        placeholder="Wpisz unikalny klucz artykułu"
                        required
                        tooltip="Klucz artykułu to nadany przez autora identyfikator tekstowy, który umożliwia wygenerowanie treści w odpowiednim miejscu w serwisie."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="title"
                        inputIcon="flag"
                        label="Tytuł artykułu"
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
                        message="Wpisz zawartość artykułu!"
                        placeholder="Daj ponieść się ekspresji..."
                        required
                        rows={8}
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="date"
                        fieldType="date"
                        label="Data dodania lub utworzenia (pole nieobowiązkowe)"
                        inputIcon="calendar"
                        placeholder="Data utworzenia (domyślnie wygenerowana zostanie aktualna)"
                        required={false}
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="author"
                        initialValue={this.props.name}
                        inputIcon="crown"
                        label="Autor artykułu"
                        message="Podaj autora artykułu!"
                        placeholder="Podaj autora artykułu"
                        required
                        tooltip="Wpisz nazwę użytkownika, który jest autorem artykułu. Domyślnie jest nim zalogowany użytkownik."
                    />

                    <ButtonComponent
                        htmlType="submit"
                        icon="file-add"
                        text="Dodaj artykuł"
                        type="primary"
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
        name: state.auth.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewArticle: (allocationKey, title, content, author, date) => {
            return dispatch(
                articles.addNewArticle(
                    allocationKey,
                    title,
                    content,
                    author,
                    date
                )
            );
        }
    };
};

ArticlesAddForm = connect(mapStateToProps, mapDispatchToProps)(ArticlesAddForm);

export default Form.create()(ArticlesAddForm);
