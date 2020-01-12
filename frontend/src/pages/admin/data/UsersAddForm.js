import React, { Component } from "react";
import locale from "antd/es/date-picker/locale/pl_PL";
import { connect } from "react-redux";

import { users } from "../../../_store/_actions";

import {
    Button,
    DatePicker,
    Form,
    Icon,
    Input,
    Layout,
    Select,
    Tooltip
} from "antd";
import styles from "../../../styles/styles";

const { Item } = Form;
const { Password } = Input;
const { Content } = Layout;
const { Option } = Select;

const buttonData = {
    icon: "user-add",
    type: "primary",
    htmlType: "submit",
    text: "Dodaj użytkownika"
};

class UsersAddForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const { validateFields, resetFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.register(
                    values.username,
                    values.email,
                    values.password,
                    values.role,
                    values.date
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
                <Form onSubmit={this.handleSubmit} id="add-user-form">
                    <Item label="Nazwa użytkownika">
                        {getFieldDecorator("username", {
                            rules: [
                                {
                                    required: true,
                                    message:
                                        "Określ unikalną nazwę użytkownika!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Nazwą użytkownika jest ciąg znaków identyfikujący internautę w serwisie.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Podaj nazwę użytkownika"
                            />
                        )}
                    </Item>

                    <Item label="Adres e-mail">
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    type: "email",
                                    message: "Podaj poprawny adres e-mail!"
                                },
                                {
                                    required: true,
                                    message: "Wpisz adres e-mail!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="mail"
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Adres e-mail powiązany z kontem.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Podaj adres e-mail"
                            />
                        )}
                    </Item>

                    <Item label="Hasło">
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "Wpisz swoje hasło!"
                                },
                                { min: 8, message: "Hasło za krótkie!" },
                                {
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{7,}$/g,
                                    message: "Hasło nie spełnia wymagań!"
                                }
                            ]
                        })(
                            <Password
                                prefix={
                                    <Icon type="key" style={styles.inputIcon} />
                                }
                                suffix={
                                    <Tooltip title="Hasło powinno składać się z conajmniej 8 znaków, zawierać literę oraz cyfrę.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Wpisz hasło użytkownika."
                            />
                        )}
                    </Item>

                    <Item label="Rola w serwisie">
                        {getFieldDecorator("role", {
                            initialValue: "USER",
                            rules: [
                                {
                                    required: false
                                }
                            ]
                        })(
                            <Select>
                                <Option value="USER">USER</Option>
                                <Option value="ADMIN">ADMIN</Option>
                                <Option value="WRITER">WRITER</Option>
                            </Select>
                        )}
                    </Item>

                    <Item label="Data utworzenia konta (pole nieobowiązkowe)">
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
        errorMessage: state.users.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: (username, email, password, role, date) => {
            return dispatch(
                users.register(username, email, password, role, date)
            );
        }
    };
};

UsersAddForm = connect(mapStateToProps, mapDispatchToProps)(UsersAddForm);

export default Form.create()(UsersAddForm);
