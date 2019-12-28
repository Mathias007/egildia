import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../_store/_actions";

import GlobalPageHeader from "./components/GlobalPageHeader";
import GlobalSidebar from "./components/GlobalSidebar";
import GlobalPageFooter from "./components/GlobalPageFooter";
import BreadcrumbGlobalComponent from "./components/BreadcrumbGlobalComponent";

import { Form, Icon, Input, Button, Checkbox, Layout, PageHeader, Tooltip } from "antd";

const { Content } = Layout;

const { Item } = Form;

class LoginPage extends Component {
    state = {
        // name: "",
        // password: "",
        showPassword: false,
        // rememberMe: false,
        errorMessage: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                // this.setState({
                //     name: values.username,
                //     password: values.password,
                //     rememberMe: values.remember
                // });
                // console.log(this.state);
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

        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/knights/" />;
        }
        return (
            <div className="App-container">
                <Layout className="layout">
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <Content style={{ padding: "0 50px" }}>
                            <BreadcrumbGlobalComponent />
                            <Form
                                onSubmit={this.handleSubmit}
                                className="login-form"
                            >
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
                                                            color:
                                                                "rgba(0,0,0,.45)"
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
                                        <Input.Password
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
                                    })(<Checkbox>Zapamiętaj mnie</Checkbox>)}
                                    <Button
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
                    </Layout>
                </Layout>
                <GlobalPageFooter />
            </div>
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

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default Form.create()(LoginPage);
