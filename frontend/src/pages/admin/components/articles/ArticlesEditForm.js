import React, { Component } from "react";
import { connect } from "react-redux";

import { articles } from "../../../../_store/_actions";
import linksPaths from "../../../../_config/linksPaths";
import serverStatuses from "../../../../_config/serverStatuses";
import styles from "../../../../styles/styles";

import SingleFormElement from "../../../components/universal/SingleFormElement";
import ButtonComponent from "../../../components/universal/ButtonComponent";
import ErrorMessageComponent from "../../../components/universal/ErrorMessageComponent";
import Success from "../../../components/errors/Success";

import { Form, Layout } from "antd";
const { Content } = Layout;

const { ARTICLES } = linksPaths;
const { STATUS_OK } = serverStatuses;

class ArticleEditForm extends Component {
    handleSubmit = (values) => {
        let modificationDate = new Date();

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
    };

    render() {
        if (this.props.status === STATUS_OK)
            return (
                <Success
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={ARTICLES.MAIN}
                    description="Czy chcesz kontynuować pracę?"
                />
            );
        else {
            const { properArticle } = this.props;
            return (
                <Content style={styles.content}>
                    <Form onFinish={this.handleSubmit} id="edit-article-form">
                        <SingleFormElement
                            fieldName="allocationKey"
                            initialValue={properArticle.allocationKey}
                            inputIcon="key"
                            label="Klucz identyfikacyjny artykułu"
                            message="Podaj klucz artykułu!"
                            placeholder="Wpisz unikalny klucz artykułu"
                            required
                            tooltip="Klucz artykułu to nadany przez autora identyfikator tekstowy, który umożliwia wygenerowanie treści w odpowiednim miejscu w serwisie."
                        />

                        <SingleFormElement
                            fieldName="title"
                            initialValue={properArticle.title}
                            inputIcon="flag"
                            label="Tytuł artykułu"
                            message="Wpisz tytuł artykułu!"
                            placeholder="Nadaj artykułowi tytuł"
                            required
                            tooltip="Tytuł artykułu, wyświetlany jako nagłówek podstrony zawierającej."
                        />

                        <SingleFormElement
                            fieldName="content"
                            fieldType="text-area"
                            initialValue={properArticle.content}
                            label="Zawartość artykułu"
                            message="Wpisz zawartość artykułu!"
                            placeholder="Daj ponieść się ekspresji..."
                            required
                            rows={8}
                        />

                        <SingleFormElement
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
                            cancelClick={this.props.cleanServerStatus}
                            cancelLink={ARTICLES.MAIN}
                            cancelText="Zrezygnuj"
                            htmlType="submit"
                            icon="file-edit"
                            text="Edytuj artykuł"
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
        errorMessage: state.articles.errorMessage,
        properArticle: state.articles.properArticle,
        status: state.articles.status,
    };
};

const mapDispatchToProps = (dispatch) => {
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
        },
        cleanServerStatus: () => {
            return dispatch(articles.cleanServerStatus());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditForm);
