import React, { Component } from "react";
// import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";

import { news } from "../../../_store/_actions";
import { auth } from "../../../_store/_actions";

import {
    Button,
    DatePicker,
    Form,
    Icon,
    Input,
    Layout,
    PageHeader,
    Tooltip
} from "antd";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

const { Item } = Form;
const { TextArea } = Input;
const { Content } = Layout;

class NewsCreator extends Component {
    state = {
        errorMessage: ""
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.addSingleNews(
                    values.title,
                    values.content,
                    values.author,
                    values.date,
                    values.category
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
                            title="Dodawanie nowego wpisu"
                        />
                        <Item label="Kategoria artykułu">
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
                                            type="folder-open"
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
                                        message: "Podaj tytuł wpisu!"
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
                                        message: "Umieść zawartość nowego wpisu!"
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

                        <Item label="Data dodania (utworzenia)">
                            {getFieldDecorator("date", {
                                rules: [
                                    {
                                        type: "object",
                                        required: false
                                    }
                                ]
                            })(
                                <DatePicker
                                    defaultPickerValue={moment()}
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
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder="Data utworzenia"
                                />
                            )}
                        </Item>

                        <Item>
                            <Button
                                icon="file-add"
                                type="primary"
                                htmlType="submit"
                                className="create-news-button"
                            >
                                Dodaj wpis{" "}
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
        name: state.auth.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSingleNews: (title, content, author, date, category) => {
            return dispatch(
                news.addSingleNews(title, content, author, date, category)
            );
        }
    };
};

NewsCreator = connect(mapStateToProps, mapDispatchToProps)(NewsCreator);

export default Form.create()(NewsCreator);
