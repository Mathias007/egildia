import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../../_store/_actions";

import {
    Button,
    Checkbox,
    Form,
    Icon,
    Input,
    Layout,
    PageHeader,
    Tooltip
} from "antd";
import styles from "../../../styles/styles";

const { Item } = Form;
const { Password } = Input;
const { Content } = Layout;

class LoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.login(
                    values.username,
                    values.password,
                    values.remember
                );
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Content style={styles.content}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <PageHeader
                        className="login-header"
                        title="Formularz logowania"
                    />
                    <Item>
                        {getFieldDecorator("username", {
                            rules: [
                                {
                                    required: true,
                                    message:
                                        "Wpisz nazwę użytkownika lub adres e-mail!"
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
                                    <Tooltip title="W celu zalogowania możesz podać - wedle wyboru - albo nazwę użytkownika, albo powiązany z kontem adres e-mail.">
                                        <Icon
                                            type="info-circle"
                                            style={{
                                                color: "rgba(0,0,0,.45)"
                                            }}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Login lub e-mail"
                            />
                        )}
                    </Item>
                    <Item>
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "Wpisz hasło!"
                                }
                            ]
                        })(
                            <Password
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{
                                            color: "rgba(0,0,0,.25)"
                                        }}
                                    />
                                }
                                type="password"
                                placeholder="Hasło"
                            />
                        )}
                    </Item>
                    <Item>
                        {getFieldDecorator("remember", {
                            valuePropName: "checked",
                            initialValue: true
                        })(<Checkbox>Zapamiętaj</Checkbox>)}
                        <Button
                            icon="login"
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Zaloguj się
                        </Button>
                    </Item>
                    <Item>
                        Nie masz konta?{" "}
                        <Link to="/register">Zarejestruj się</Link>
                    </Item>
                </Form>
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        remember: state.auth.remember,
        errorMessage: state.auth.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (name, password, remember) => {
            return dispatch(auth.login(name, password, remember));
        }
    };
};

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Form.create()(LoginForm);
