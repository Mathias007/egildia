import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../../_store/_actions";
import linksPaths from "../../../_config/linksPaths";
import serverStatuses from "../../../_config/serverStatuses";
import styles from "../../../styles/styles";

import SingleFormElement from "../../components/universal/SingleFormElement";
import ButtonComponent from "../../components/universal/ButtonComponent";
import Success from "../../components/errors/Success";

import { Checkbox, Form, Layout } from "antd";
const { Item } = Form;
const { Content } = Layout;

const { GENERAL } = linksPaths;
const { STATUS_OK } = serverStatuses;

class LoginForm extends Component {
    handleSubmit = (values) => {
        this.props.login(values.username, values.password, values.remember);
    };

    render() {
        if (
            (this.props.status === STATUS_OK && this.props.isAuthenticated) ||
            this.props.remember
        )
            return (
                <Success
                    oneButton
                    redirection
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={GENERAL.INDEX}
                    description="Za chwilę zostaniesz przekierowany na stronę główną serwisu. Kliknij poniżej, jeżeli nie chcesz czekać."
                />
            );
        return (
            <Content style={styles.content}>
                <Form onFinish={this.handleSubmit} className="login-form">
                    <SingleFormElement
                        fieldName="username"
                        inputIcon="user"
                        message="Wpisz nazwę użytkownika lub adres e-mail!"
                        placeholder="Login lub e-mail"
                        required
                        tooltip="W celu zalogowania możesz podać - wedle wyboru - albo nazwę użytkownika, albo powiązany z kontem adres e-mail."
                    />

                    <SingleFormElement
                        fieldName="password"
                        fieldType="password"
                        inputIcon="lock"
                        message="Wpisz hasło!"
                        placeholder="Hasło"
                        required
                    />
                    <Item
                        name="remember"
                        valuePropName="checked"
                        initialValue={true}
                    >
                        <Checkbox>Zapamiętaj</Checkbox>

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

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        remember: state.auth.remember,
        errorMessage: state.auth.errorMessage,
        status: state.auth.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (name, password, remember) => {
            return dispatch(auth.login(name, password, remember));
        },
        cleanServerStatus: () => {
            return dispatch(auth.cleanServerStatus());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
