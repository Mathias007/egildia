import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { news } from "../../../_store/_actions";

import { Button, Form, Icon, Input, Layout, PageHeader, Tooltip } from "antd";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

const { Item } = Form;
const { TextArea } = Input;
const { Content } = Layout;

class NewsEditor extends Component {
    state = {
        id: this.props.match.params._id,
        category: this.props.category,
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
                this.props.editNews(
                    this.props.match.params._id,
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
                            title="Edycja wybranego wpisu"
                        />
                        <Item label="Kategoria wpisu">
                            {getFieldDecorator("category", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Określ kategorię artykułu!"
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
                                        <Tooltip title="Kategorie systematyzują wpisy pod kątem merytorycznym.">
                                            <Icon
                                                type="info-circle"
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
                                            />
                                        </Tooltip>
                                    }
                                    placeholder="Określ kategorię artykułu"
                                />
                            )}
                        </Item>

                        <Item label="Tytuł wpisu">
                            {getFieldDecorator("title", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Wpisz tytuł wpisu!"
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
                                        <Tooltip title="Tytuł wpisu, wyświetlany jako nagłówek w aktualnościach i na stronie danego wpisu.">
                                            <Icon
                                                type="info-circle"
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
                                            />
                                        </Tooltip>
                                    }
                                    placeholder="Nadaj wpisowi tytuł"
                                />
                            )}
                        </Item>

                        <Item label="Zawartość wpisu">
                            {getFieldDecorator("content", {
                                rules: [
                                    {
                                        required: true,
                                        message:
                                            "Umieść zawartość nowego wpisu!"
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
                                        <Tooltip title="Zawartość tekstowa wpisu.">
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

                        <Item label="Autor wpisu">
                            {getFieldDecorator("author", {
                                initialValue: this.props.name,
                                rules: [
                                    {
                                        required: true,
                                        message: "Podaj autora wpisu!"
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
                                        <Tooltip title="Wpisz nazwę użytkownika, który jest autorem wpisu. Domyślnie jest nim zalogowany użytkownik.">
                                            <Icon
                                                type="info-circle"
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
                                            />
                                        </Tooltip>
                                    }
                                    placeholder="Podaj autora wpisu"
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
                                Edytuj wpis{" "}
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
        errorMessage: state.news.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editNews: (id, title, content, author, category, modificationDate) => {
            return dispatch(
                news.editNews(
                    id,
                    title,
                    content,
                    author,
                    category,
                    modificationDate
                )
            );
        }
    };
};

NewsEditor = connect(mapStateToProps, mapDispatchToProps)(NewsEditor);

export default Form.create()(NewsEditor);
