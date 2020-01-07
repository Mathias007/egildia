import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";

import { news } from "../../../_store/_actions";

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

const { ADMIN_NEWS, EDITOR } = navigationTitles;

class NewsEditor extends Component {
    state = {};

    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    handleSubmit = e => {
        e.preventDefault();

        let modificationDate = new Date();
        const { validateFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.editSelectedNews(
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
        const { properNews } = this.props;

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_NEWS}
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
                        className="edit-news-form"
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
                                        className="edit-news-button"
                                    >
                                        Edytuj wpis{" "}
                                    </Button>
                                }
                            />
                        </div>

                        <Item label="Kategoria wpisu">
                            {getFieldDecorator("category", {
                                initialValue: properNews.category,
                                rules: [
                                    {
                                        required: true,
                                        message: "Określ kategorię wpisu!"
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
                                    placeholder="Określ kategorię wpisu"
                                />
                            )}
                        </Item>

                        <Item label="Tytuł wpisu">
                            {getFieldDecorator("title", {
                                initialValue: properNews.title,
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
                                initialValue: properNews.content,
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
                                initialValue: properNews.author,
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

                        <Item className="btn-wrap">
                            <Button
                                icon="edit"
                                type="primary"
                                htmlType="submit"
                                className="edit-article-button"
                            >
                                Edytuj wpis
                            </Button>
                            <Divider
                                type="vertical"
                                dashed
                                style={{ border: 0 }}
                            />
                            <Button>
                                <Link to="/admin/news">Zrezygnuj</Link>
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
        errorMessage: state.news.errorMessage,
        properNews: state.news.properNews
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
        }
    };
};

NewsEditor = connect(mapStateToProps, mapDispatchToProps)(NewsEditor);

export default Form.create()(NewsEditor);
