import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { users } from "../../../_store/_actions";
import { passwordPattern } from "../../../_config/globalContentVariables";
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

class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = (values) => {
        console.log("Received values of form: ", values);
        this.props.register(
            values.nickname,
            values.email,
            values.password,
            values.remember
        );
    };

    validatePassword = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
            }

            return Promise.reject(
                new Error("Podane hasła do siebie nie pasują!")
            );
        },
    });

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
                    description="Utworzyłeś konto w serwisie i zostałeś zalogowany. Za chwilę przeniesiemy cię na stronę główną. Kliknij poniżej, jeżeli nie chcesz czekać."
                />
            );

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Content style={styles.content}>
                <Form
                    {...formItemLayout}
                    onFinish={this.handleSubmit}
                    className="registration-form"
                >
                    <SingleFormElement
                        fieldName="nickname"
                        inputIcon="user"
                        label="Nazwa użytkownika"
                        message="Wpisz swoją nazwę!"
                        placeholder="Podaj nazwę użytkownika"
                        required
                        tooltip="Unikalna nazwa, pod którą będziesz widoczny w serwisie."
                    />
                    <SingleFormElement
                        fieldName="email"
                        fieldType="email"
                        inputIcon="mail"
                        label="Adres e-mail"
                        message="Podaj poprawny adres e-mail!"
                        placeholder="Podaj adres e-mail"
                        required
                        tooltip="Adres e-mail, który powiążesz z kontem, będzie służył do komunikacji z administracją serwisu."
                    />
                    <SingleFormElement
                        fieldName="password"
                        fieldType="password"
                        hasFeedback
                        inputIcon="key"
                        label="Hasło"
                        message="Wpisz swoje hasło!"
                        minLength={8}
                        pattern={passwordPattern}
                        placeholder="Wpisz hasło użytkownika."
                        required
                        tooltip="Twoje hasło powinno składać się z conajmniej 8 znaków, zawierać literę oraz cyfrę."
                    />
                    <SingleFormElement
                        fieldName="confirm"
                        fieldType="password"
                        hasFeedback
                        inputIcon="key"
                        label="Potwierdź hasło"
                        dependencies={["password"]}
                        message="Wpisz jeszcze raz swoje hasło!"
                        placeholder="Wpisz jeszcze raz swoje hasło."
                        required
                        tooltip="Dla pewności wpisz swoje hasło raz jeszcze."
                        isConfirmField
                        validator={this.validatePassword}
                    />
                    <Item
                        {...tailFormItemLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Zapamiętaj</Checkbox>
                        <ButtonComponent
                            composition="nowrap"
                            htmlType="submit"
                            icon="user-add"
                            text="Zarejestruj się"
                            type="primary"
                        />
                    </Item>
                    <Item {...tailFormItemLayout}>
                        Posiadasz konto w serwisie?{" "}
                        <Link to={GENERAL.LOGIN}>Zaloguj się</Link>
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
        errorMessage: state.users.errorMessage,
        status: state.users.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (name, email, password, remember) => {
            return dispatch(users.register(name, email, password, remember));
        },
        cleanServerStatus: () => {
            return dispatch(users.cleanServerStatus());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
