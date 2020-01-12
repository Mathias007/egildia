import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { articles } from "../../../_store/_actions";

import { Button, Divider, Form, Icon, Input, Layout, Tooltip } from "antd";

const { Item } = Form;
const { TextArea } = Input;
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
            <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                }}
            >
                <Form
                    onSubmit={this.handleSubmit}
                    id="edit-article-form"
                >
                    <Item label="Klucz identyfikacyjny artykułu">
                        {getFieldDecorator("allocationKey", {
                            initialValue: properArticle.allocationKey,
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
                            initialValue: properArticle.title,
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
                            initialValue: properArticle.content,
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

                    <Item label="Autor artykułu">
                        {getFieldDecorator("author", {
                            initialValue: properArticle.author,
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
                            icon="file-edit"
                            type="primary"
                            htmlType="submit"
                            className="edit-article-button"
                        >
                            Edytuj artykuł{" "}
                        </Button>
                        <Divider type="vertical" dashed style={{ border: 0 }} />
                        <Button>
                            <Link to="/admin/articles">Zrezygnuj</Link>
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
