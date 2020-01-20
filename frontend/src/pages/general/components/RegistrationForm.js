import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { users } from "../../../_store/_actions";
import { passwordPattern } from "../../../_config/globalContentVariables";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import SingleFormElement from "../../components/SingleFormElement";
import ButtonComponent from "../../components/ButtonComponent";

import { Checkbox, Form, Layout } from "antd";
const { Item } = Form;
const { Content } = Layout;

const { GENERAL } = linksPaths;

class RegistrationForm extends Component {
    state = {
        confirmDirty: false
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.register(
                    values.nickname,
                    values.email,
                    values.password,
                    values.remember
                );
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue("password")) {
            callback("Wpisane hasła nie pasują do siebie!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };

        return (
            <Content style={styles.content}>
                <Form
                    {...formItemLayout}
                    onSubmit={this.handleSubmit}
                    className="registration-form"
                >
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="nickname"
                        inputIcon="user"
                        label="Nazwa użytkownika"
                        message="Wpisz swoją nazwę!"
                        placeholder="Podaj nazwę użytkownika"
                        required
                        tooltip="Unikalna nazwa, pod którą będziesz widoczny w serwisie."
                    />
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="email"
                        fieldType="email"
                        inputIcon="mail"
                        label="Zawartość artykułu"
                        message="Podaj poprawny adres e-mail!"
                        placeholder="Podaj adres e-mail"
                        required
                        tooltip="Adres e-mail, który powiążesz z kontem, będzie służył do komunikacji z administracją serwisu."
                    />
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
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
                        getFieldDecorator={getFieldDecorator}
                        fieldName="confirm"
                        fieldType="password"
                        hasFeedback
                        inputIcon="key"
                        label="Potwierdź hasło"
                        message="Wpisz jeszcze raz swoje hasło!"
                        placeholder="Wpisz jeszcze raz swoje hasło."
                        required
                        tooltip="Dla pewności wpisz swoje hasło raz jeszcze."
                        onBlur={this.handleConfirmBlur}
                        validator={this.compareToFirstPassword}
                    />
                    <Item {...tailFormItemLayout}>
                        {getFieldDecorator("remember", {
                            valuePropName: "checked"
                        })(<Checkbox>Zapamiętaj</Checkbox>)}
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        remember: state.auth.remember,
        errorMessage: state.auth.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: (name, email, password, remember) => {
            return dispatch(users.register(name, email, password, remember));
        }
    };
};

RegistrationForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForm);

export default Form.create()(RegistrationForm);
