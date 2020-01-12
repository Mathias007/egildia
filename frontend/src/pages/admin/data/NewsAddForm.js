import React, { Component } from "react";
import locale from "antd/es/date-picker/locale/pl_PL";
import { connect } from "react-redux";

import { news } from "../../../_store/_actions";

import { Button, DatePicker, Form, Icon, Input, Layout, Tooltip } from "antd";
import styles from "../../../styles/styles";

const { Item } = Form;
const { TextArea } = Input;
const { Content } = Layout;

const buttonData = {
    icon: "file-add",
    type: "primary",
    htmlType: "submit",
    text: "Dodaj wpis"
};

class NewsAddForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const { validateFields, resetFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.addSingleNews(
                    values.title,
                    values.content,
                    values.author,
                    values.date,
                    values.category
                );
                resetFields();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { icon, type, htmlType, text } = buttonData;
        return (
            <Content style={styles.content}>
                <Form onSubmit={this.handleSubmit} id="add-news-form">
                    <Item label="Kategoria wpisu">
                        {getFieldDecorator("category", {
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
                                        type="folder-open"
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Kategorie systematyzują wpisy pod kątem merytorycznym.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Określ kategorię wpisu"
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
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Tytuł wpisu, wyświetlany jako nagłówek w aktualnościach i na stronie danego wpisu.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
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
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Zawartość tekstowa wpisu.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
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
                                style={styles.datePicker}
                                suffixIcon={
                                    <Icon
                                        type="calendar"
                                        style={styles.inputIcon}
                                    />
                                }
                                showTime
                                showToday
                                format="LLLL"
                                placeholder="Data utworzenia (domyślnie wygenerowana zostanie aktualna)"
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
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Wpisz nazwę użytkownika, który jest autorem wpisu. Domyślnie jest nim zalogowany użytkownik.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Podaj autora wpisu"
                            />
                        )}
                    </Item>

                    <Item className="btn-wrap">
                        <Button icon={icon} type={type} htmlType={htmlType}>
                            {text}
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

NewsAddForm = connect(mapStateToProps, mapDispatchToProps)(NewsAddForm);

export default Form.create()(NewsAddForm);
