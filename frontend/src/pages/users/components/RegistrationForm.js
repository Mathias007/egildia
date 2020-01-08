import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import { auth } from "../../../_store/_actions";

import { users } from "../../../_store/_actions";

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

const { Item } = Form;
const { Password } = Input;
const { Content } = Layout;

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
            <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                }}
            >
                <Form
                    {...formItemLayout}
                    onSubmit={this.handleSubmit}
                    className="registration-form"
                >
                    <PageHeader
                        className="registration-header"
                        title="Formularz rejestracji"
                    />
                    <Item
                        label={
                            <span>
                                Nazwa użytkownika&nbsp;
                                <Tooltip title="Unikalna nazwa, pod którą będziesz widoczny w serwisie.">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                    >
                        {getFieldDecorator("nickname", {
                            rules: [
                                {
                                    required: true,
                                    message: "Wpisz swoją nazwę!",
                                    whitespace: true
                                }
                            ]
                        })(<Input />)}
                    </Item>
                    <Item
                        label={
                            <span>
                                Adres e-mail&nbsp;
                                <Tooltip title="Adres e-mail, który powiążesz z kontem, będzie służył do komunikacji z administracją serwisu.">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                    >
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
                        })(<Input />)}
                    </Item>
                    <Item
                        label={
                            <span>
                                Hasło&nbsp;
                                <Tooltip title="Twoje hasło powinno składać się z conajmniej 8 znaków, zawierać literę oraz cyfrę.">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                        hasFeedback
                    >
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
                                },
                                {
                                    validator: this.validateToNextPassword
                                }
                            ]
                        })(<Password />)}
                    </Item>
                    <Item
                        label={
                            <span>
                                Potwierdź hasło&nbsp;
                                <Tooltip title="Dla pewności wpisz swoje hasło raz jeszcze.">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }
                        hasFeedback
                    >
                        {getFieldDecorator("confirm", {
                            rules: [
                                {
                                    required: true,
                                    message: "Wpisz jeszcze raz swoje hasło!"
                                },
                                {
                                    validator: this.compareToFirstPassword
                                }
                            ]
                        })(<Password onBlur={this.handleConfirmBlur} />)}
                    </Item>

                    <Item {...tailFormItemLayout}>
                        {getFieldDecorator("remember", {
                            valuePropName: "checked"
                        })(<Checkbox>Zapamiętaj</Checkbox>)}

                        <Button
                            icon="user-add"
                            type="primary"
                            htmlType="submit"
                        >
                            Zarejestruj się
                        </Button>
                    </Item>
                    <Item {...tailFormItemLayout}>
                        Posiadasz konto w serwisie?{" "}
                        <Link to="login">Zaloguj się</Link>
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
