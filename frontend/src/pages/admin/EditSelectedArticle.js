import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { articles } from "../../_store/_actions";

import { Button, Form, Icon, Input, Layout, PageHeader, Tooltip } from "antd";

import BreadcrumbComponent from "../global/BreadcrumbComponent";

const { Item } = Form;
const { TextArea } = Input;
const { Content } = Layout;

class EditSelectedArticle extends Component {
    state = {
        id: this.props.id,
        allocationKey: this.props.allocationKey,
        title: this.props.title,
        content: this.props.content,
        author: this.props.author,
        errorMessage: ""
    };

    handleSubmit = e => {
        e.preventDefault();

        let modificationDate = new Date();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.editSelectedArticle(
                    this.props.id,
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

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
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
                        className="add-article-form"
                    >
                        <PageHeader
                            className="add-article-header"
                            title="Dodawanie nowego artykułu"
                        />
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

                        <Item>
                            <Button
                                icon="file-edit"
                                type="primary"
                                htmlType="submit"
                                className="edit-article-button"
                            >
                                Edytuj artykuł{" "}
                            </Button>
                        </Item>
                        <Item>{this.props.errorMessage}</Item>
                    </Form>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.articles.errorMessage
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

EditSelectedArticle = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditSelectedArticle);

export default Form.create()(EditSelectedArticle);
