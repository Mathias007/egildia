import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HeaderComponent from "../global/HeaderComponent";
import SidebarComponent from "../global/SidebarComponent";
import FooterComponent from "../global/FooterComponent";

import LoginForm from "./components/LoginForm";

import { Layout } from "antd";

class LoginPage extends Component {
    state = {};

    render() {
        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/knights/" />;
        }
        return (
            <div className="App-container">
                <Layout>
                    <HeaderComponent />
                    <Layout>
                        <SidebarComponent />
                        <LoginForm />
                    </Layout>
                </Layout>
                <FooterComponent />
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
