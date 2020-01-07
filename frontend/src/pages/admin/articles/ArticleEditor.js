import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import { articles } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import {
    Button,
    Divider,
    Form,
    Icon,
    Input,
    Layout,
    PageHeader,
    Tooltip
} from "antd";

const { Item } = Form;
const { TextArea } = Input;
const { Content } = Layout;

const { ADMIN_ARTICLES, EDITOR } = navigationTitles;

class ArticleEditor extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperArticle(this.props.match.params._id);
    }

    handleSubmit = e => {
        e.preventDefault();

        let modificationDate = new Date();
        const { validateFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Sent ID:" + this.props.match.params._id);
                console.log("Received values of form: ", values);
                this.props.editSelectedArticle(
                    this.props.match.params._id,
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
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_ARTICLES}
                    page={EDITOR}
                />
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
                        className="edit-article-form"
                    >
                        <div>
                            <PageHeader
                                onBack={() => window.history.back()}
                                title="Powrót"
                                subTitle="Panel administracyjny"
                                extra={
                                    <Button
                                        icon="edit"
                                        type="primary"
                                        htmlType="submit"
                                        className="edit-article-button"
                                    >
                                        Edytuj artykuł{" "}
                                    </Button>
                                }
                            />
                        </div>

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
                            <Divider
                                type="vertical"
                                dashed
                                style={{ border: 0 }}
                            />
                            <Button>
                                <Link to="/admin/articles">Zrezygnuj</Link>
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
        errorMessage: state.articles.errorMessage,
        properArticle: state.articles.properArticle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showProperArticle: id => {
            return dispatch(articles.showProperArticle(id));
        },
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

ArticleEditor = connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);

export default Form.create()(ArticleEditor);
