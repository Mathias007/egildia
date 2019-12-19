import React, { Component } from "react";
import {
    Redirect,
    // Link
} from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../_store/_actions";

import GlobalPageHeader from "./components/GlobalPageHeader";
import GlobalSidebar from "./components/GlobalSidebar";
import GlobalPageFooter from "./components/GlobalPageFooter";

import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Layout,
    // Menu,
    Breadcrumb
} from "antd";

const {
    //  Header,
    Content,
    //   Footer
} = Layout;

class LoginPage extends Component {
    state = {
        name: "",
        password: "",
        showPassword: false,
        rememberMe: false,
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
                this.props.authenticationUser(
                    values.username,
                    values.password,
                    // values.remember
                );
            }
        });

        // this.props.login(
        //     this.state.name,
        //     this.state.password,
        //     this.state.remember
        // );
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        if (this.props.isAuthorized
            //  || this.props.remember
        ) {
            return <Redirect to="/knights/" />;
        }
        return (
            <div className="App-container">
                <Layout className="layout">
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <Content style={{ padding: "0 50px" }}>
                            <Breadcrumb style={{ margin: "16px 0" }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Form
                                onSubmit={this.handleSubmit}
                                className="login-form"
                            >
                                <Form.Item>
                                    {getFieldDecorator("username", {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    "Please input your username!"
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
                                            placeholder="Username"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("password", {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    "Please input your Password!"
                                            }
                                        ]
                                    })(
                                        <Input
                                            prefix={
                                                <Icon
                                                    type="lock"
                                                    style={{
                                                        color: "rgba(0,0,0,.25)"
                                                    }}
                                                />
                                            }
                                            type="password"
                                            placeholder="Password"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("remember", {
                                        valuePropName: "checked",
                                        initialValue: true
                                    })(<Checkbox>Remember me</Checkbox>)}
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                    >
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                </Form.Item>
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
        isAuthorized: state.auth.isAuthorized,
        // isAuthenticated: state.auth.isAuthenticated,
        // remember: state.auth.remember,
        // errorMessage: state.auth.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authenticationUser: (name, password) => {
            return dispatch(auth.authenticationUser(name, password));
        },
        // login: (name, password, remember) => {
        //     return dispatch(auth.login(name, password, remember));
        // }
    };
};

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default Form.create()(LoginPage);
