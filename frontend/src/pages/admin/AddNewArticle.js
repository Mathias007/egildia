import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { articles } from "../../_store/_actions";

import {
    Button,
    Form,
    Icon,
    Input,
    Layout,
    PageHeader,
    Tooltip
} from "antd";

import BreadcrumbComponent from "../global/BreadcrumbComponent";

const { Item } = Form;
const { TextArea } = Input;
const { Content } = Layout;

class AddNewArtice extends Component {
    state = {
        errorMessage: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.addNewArticle(
                    values.allocationKey,
                    values.title,
                    values.content,
                    values.author,
                    values.date
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
                        <Item>
                            {getFieldDecorator("allocationKey", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Podaj klucz artykułu"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
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
                                    placeholder="Klucz artykułu"
                                />
                            )}
                        </Item>

                        <Item>
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
                                            type="user"
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
                                    placeholder="Tytuł"
                                />
                            )}
                        </Item>

                        <Item>
                            {getFieldDecorator("content", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Wpisz zawartość artykułu!"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
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
                                    placeholder="Zawartość"
                                />
                            )}
                        </Item>

                        <Item>
                            {getFieldDecorator("author", {
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
                                            type="user"
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
                                    placeholder="Autor"
                                />
                            )}
                        </Item>

                        <Item>
                            {getFieldDecorator("date", {
                                rules: [
                                    {
                                        required: false
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    suffix={
                                        <Tooltip title="Data dodania lub data utworzenia artykułu. Pole nieobowiązkowe.">
                                            <Icon
                                                type="info-circle"
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
                                            />
                                        </Tooltip>
                                    }
                                    placeholder="Data dodania (utworzenia)"
                                />
                            )}
                        </Item>

                        <Item>
                            <Button
                                icon="login"
                                type="primary"
                                htmlType="submit"
                                className="add-article-button"
                            >
                                Dodaj artykuł{" "}
                            </Button>
                        </Item>
                        <Item>
                            {this.props.errorMessage}
                        </Item>
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

AddNewArtice = connect(mapStateToProps, mapDispatchToProps)(AddNewArtice);

export default Form.create()(AddNewArtice);
