import React, { Component } from "react";
import locale from "antd/es/date-picker/locale/pl_PL";
import { connect } from "react-redux";

import { articles } from "../../../_store/_actions";

import { Button, DatePicker, Form, Icon, Input, Layout, Tooltip } from "antd";
import styles from "../../../styles/styles";

const { Item } = Form;
const { TextArea } = Input;
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
                    <Item label="Klucz identyfikacyjny artykułu">
                        {getFieldDecorator("allocationKey", {
                            rules: [
                                {
                                    required: true,
                                    message: "Podaj klucz artykułu!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="key"
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Klucz artykułu to nadany przez autora identyfikator tekstowy, który umożliwia wygenerowanie treści w odpowiednim miejscu w serwisie.">
                                        <Icon
                                            type="info-circle"
                                            style={{
                                                color: "rgba(0,0,0,.45)"
                                            }}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Wpisz unikalny klucz artykułu"
                            />
                        )}
                    </Item>

                    <Item label="Tytuł artykułu">
                        {getFieldDecorator("title", {
                            rules: [
                                {
                                    required: true,
                                    message: "Wpisz tytuł artykułu!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="flag"
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Tytuł artykułu, wyświetlany jako nagłówek podstrony zawierającej.">
                                        <Icon
                                            type="info-circle"
                                            style={{
                                                color: "rgba(0,0,0,.45)"
                                            }}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Nadaj artykułowi tytuł"
                            />
                        )}
                    </Item>

                    <Item label="Zawartość artykułu">
                        {getFieldDecorator("content", {
                            rules: [
                                {
                                    required: true,
                                    message: "Wpisz zawartość artykułu!"
                                }
                            ]
                        })(
                            <TextArea
                                rows={4}
                                prefix={
                                    <Icon
                                        type="read"
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Zawartość artykułu, czyli tekst umieszczany jako content strony">
                                        <Icon
                                            type="info-circle"
                                            style={{
                                                color: "rgba(0,0,0,.45)"
                                            }}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Daj ponieść się ekspresji..."
                            />
                        )}
                    </Item>

                    <Item label="Data dodania lub utworzenia (pole nieobowiązkowe)">
                        {getFieldDecorator("date", {
                            rules: [
                                {
                                    type: "object",
                                    required: false
                                }
                            ]
                        })(
                            <DatePicker
                                locale={locale}
                                style={{ width: "100%" }}
                                suffixIcon={
                                    <Icon
                                        type="calendar"
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                showTime
                                showToday
                                format="LLLL"
                                placeholder="Data utworzenia (domyślnie wygenerowana zostanie aktualna)"
                            />
                        )}
                    </Item>

                    <Item label="Autor artykułu">
                        {getFieldDecorator("author", {
                            initialValue: this.props.name,
                            rules: [
                                {
                                    required: true,
                                    message: "Podaj autora artykułu!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="crown"
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Wpisz nazwę użytkownika, który jest autorem artykułu. Domyślnie jest nim zalogowany użytkownik.">
                                        <Icon
                                            type="info-circle"
                                            style={{
                                                color: "rgba(0,0,0,.45)"
                                            }}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Podaj autora artykułu"
                            />
                        )}
                    </Item>

                    <Item className="btn-wrap">
                        <Button
                            icon="file-add"
                            type="primary"
                            htmlType="submit"
                            className="add-article-button"
                        >
                            Dodaj artykuł{" "}
                        </Button>
                    </Item>
                    <Item>{this.props.errorMessage}</Item>
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
