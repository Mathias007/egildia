import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../../../../_store/_actions";
import linksPaths from "../../../../_config/linksPaths";
import serverStatuses from "../../../../_config/serverStatuses";
import styles from "../../../../styles/styles";

import SingleFormElement from "../../../components/universal/SingleFormElement";
import ButtonComponent from "../../../components/universal/ButtonComponent";
import ErrorMessageComponent from "../../../components/universal/ErrorMessageComponent";
import Success from "../../../components/errors/Success";

import { Form, Layout } from "antd";
const { Content } = Layout;

const { NEWS } = linksPaths;
const { STATUS_OK } = serverStatuses;

class NewsAddForm extends Component {
    handleSubmit = (values) => {
        console.log("Received values of form: ", values);
        this.props.addSingleNews(
            values.title,
            values.content,
            values.author,
            values.date,
            values.category
        );
    };

    render() {
        if (this.props.status === STATUS_OK)
            return (
                <Success
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={NEWS.MAIN}
                    description="Czy chcesz kontynuować pracę?"
                />
            );
        else {
            return (
                <Content style={styles.content}>
                    <Form onFinish={this.handleSubmit} id="add-news-form">
                        <SingleFormElement
                            fieldName="category"
                            inputIcon="folder-open"
                            label="Kategoria wpisu"
                            message="Określ kategorię wpisu!"
                            placeholder="Określ kategorię wpisu"
                            required
                            tooltip="Kategorie systematyzują wpisy pod kątem merytorycznym."
                        />

                        <SingleFormElement
                            fieldName="title"
                            inputIcon="flag"
                            label="Tytuł wpisu"
                            message="Podaj tytuł wpisu!"
                            placeholder="Nadaj wpisowi tytuł"
                            required
                            tooltip="Tytuł wpisu, wyświetlany jako nagłówek w aktualnościach i na stronie danego wpisu."
                        />

                        <SingleFormElement
                            fieldName="content"
                            fieldType="text-area"
                            label="Zawartość wpisu"
                            message="Umieść zawartość nowego wpisu!"
                            placeholder="Daj ponieść się ekspresji..."
                            required
                            rows={8}
                        />

                        <SingleFormElement
                            fieldName="date"
                            fieldType="date"
                            label="Data dodania lub utworzenia (pole nieobowiązkowe)"
                            inputIcon="calendar"
                            placeholder="Data utworzenia (domyślnie wygenerowana zostanie aktualna)"
                            required={false}
                        />

                        <SingleFormElement
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
                            status={this.props.status}
                            errorMessage={this.props.errorMessage}
                        />
                    </Form>
                </Content>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.news.errorMessage,
        name: state.auth.name,
        status: state.news.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSingleNews: (title, content, author, date, category) => {
            return dispatch(
                news.addSingleNews(title, content, author, date, category)
            );
        },
        cleanServerStatus: () => {
            return dispatch(news.cleanServerStatus());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsAddForm);
