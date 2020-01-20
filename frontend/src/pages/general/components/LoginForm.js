import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../../_store/_actions";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import SingleFormElement from "../../components/SingleFormElement";
import ButtonComponent from "../../components/ButtonComponent";

import { Checkbox, Form, Layout } from "antd";
const { Item } = Form;
const { Content } = Layout;

const { GENERAL } = linksPaths;

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
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="username"
                        inputIcon="user"
                        message="Wpisz nazwę użytkownika lub adres e-mail!"
                        placeholder="Login lub e-mail"
                        required
                        tooltip="W celu zalogowania możesz podać - wedle wyboru - albo nazwę użytkownika, albo powiązany z kontem adres e-mail."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="password"
                        fieldType="password"
                        inputIcon="lock"
                        message="Wpisz hasło!"
                        placeholder="Hasło"
                        required
                    />
                    <Item>
                        {getFieldDecorator("remember", {
                            valuePropName: "checked",
                            initialValue: true
                        })(<Checkbox>Zapamiętaj</Checkbox>)}

                        <ButtonComponent
                            composition="nowrap"
                            htmlType="submit"
                            icon="login"
                            text="Zaloguj się"
                            type="primary"
                        />
                    </Item>
                    <Item>
                        Nie masz konta?{" "}
                        <Link to={GENERAL.REGISTER}>Zarejestruj się</Link>
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
