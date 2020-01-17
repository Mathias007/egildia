import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../../../_store/_actions";

import SingleFormElement from "../../components/SingleFormElement";
import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";

import { Form, Layout } from "antd";
import styles from "../../../styles/styles";

const { Content } = Layout;

class NewsAddForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const { validateFields, resetFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.addSingleNews(
                    values.title,
                    values.content,
                    values.author,
                    values.date,
                    values.category
                );
                resetFields();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Content style={styles.content}>
                <Form onSubmit={this.handleSubmit} id="add-news-form">
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="category"
                        inputIcon="folder-open"
                        label="Kategoria wpisu"
                        message="Określ kategorię wpisu!"
                        placeholder="Określ kategorię wpisu"
                        required
                        tooltip="Kategorie systematyzują wpisy pod kątem merytorycznym."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="title"
                        inputIcon="flag"
                        label="Tytuł wpisu"
                        message="Podaj tytuł wpisu!"
                        placeholder="Nadaj wpisowi tytuł"
                        required
                        tooltip="Tytuł wpisu, wyświetlany jako nagłówek w aktualnościach i na stronie danego wpisu."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="content"
                        fieldType="text-area"
                        label="Zawartość wpisu"
                        message="Umieść zawartość nowego wpisu!"
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
                        message="Podaj autora wpisu!"
                        placeholder="Podaj autora wpisu"
                        required
                        tooltip="Wpisz nazwę użytkownika, który jest autorem wpisu. Domyślnie jest nim zalogowany użytkownik."
                    />

                    <ButtonComponent
                        htmlType="submit"
                        icon="file-add"
                        text="Dodaj wpis"
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
        errorMessage: state.news.errorMessage,
        name: state.auth.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSingleNews: (title, content, author, date, category) => {
            return dispatch(
                news.addSingleNews(title, content, author, date, category)
            );
        }
    };
};

NewsAddForm = connect(mapStateToProps, mapDispatchToProps)(NewsAddForm);

export default Form.create()(NewsAddForm);
