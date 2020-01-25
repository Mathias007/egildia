import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../../../_store/_actions";
import linksPaths from "../../../_config/linksPaths";
import serverStatuses from "../../../_config/serverStatuses";
import styles from "../../../styles/styles";

import SingleFormElement from "../../components/SingleFormElement";
import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";
import Success from "../../errors/Success";

import { Form, Layout } from "antd";
const { Content } = Layout;

const { NEWS } = linksPaths;
const { STATUS_OK } = serverStatuses;

class NewsEditForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        let modificationDate = new Date();
        const { validateFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.editSelectedNews(
                    this.props.idParam,
                    values.title,
                    values.content,
                    values.author,
                    values.category,
                    modificationDate
                );
            }
        });
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
            const { getFieldDecorator } = this.props.form;
            const { properNews } = this.props;
            return (
                <Content style={styles.content}>
                    <Form onSubmit={this.handleSubmit} id="edit-news-form">
                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
                            fieldName="category"
                            initialValue={properNews.category}
                            inputIcon="key"
                            label="Kategoria wpisu"
                            message="Określ kategorię wpisu!"
                            placeholder="Określ kategorię wpisu"
                            required
                            tooltip="Kategorie systematyzują wpisy pod kątem merytorycznym."
                        />

                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
                            fieldName="title"
                            initialValue={properNews.title}
                            inputIcon="flag"
                            label="Tytuł wpisu"
                            message="Wpisz tytuł wpisu!"
                            placeholder="Nadaj wpisowi tytuł"
                            required
                            tooltip="Tytuł wpisu, wyświetlany jako nagłówek w aktualnościach i na stronie danego wpisu."
                        />

                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
                            fieldName="content"
                            fieldType="text-area"
                            initialValue={properNews.content}
                            label="Zawartość wpisu"
                            message="Umieść zawartość nowego wpisu!"
                            placeholder="Daj ponieść się ekspresji..."
                            required
                            rows={8}
                        />

                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
                            label="Autor wpisu"
                            fieldName="author"
                            initialValue={properNews.author}
                            inputIcon="crown"
                            message="Podaj autora wpisu!"
                            placeholder="Podaj autora wpisu"
                            required
                            tooltip="Wpisz nazwę użytkownika, który jest autorem wpisu. Domyślnie jest nim zalogowany użytkownik."
                        />

                        <ButtonComponent
                            composition="double"
                            cancelLink={NEWS.MAIN}
                            cancelText="Zrezygnuj"
                            htmlType="submit"
                            icon="edit"
                            text="Edytuj wpis"
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

const mapStateToProps = state => {
    return {
        errorMessage: state.news.errorMessage,
        properNews: state.news.properNews,
        status: state.news.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showProperNews: id => {
            return dispatch(news.showProperNews(id));
        },
        editSelectedNews: (
            id,
            title,
            content,
            author,
            category,
            modificationDate
        ) => {
            return dispatch(
                news.editSelectedNews(
                    id,
                    title,
                    content,
                    author,
                    category,
                    modificationDate
                )
            );
        },
        cleanServerStatus: () => {
            return dispatch(news.cleanServerStatus());
        }
    };
};

NewsEditForm = connect(mapStateToProps, mapDispatchToProps)(NewsEditForm);

export default Form.create()(NewsEditForm);
