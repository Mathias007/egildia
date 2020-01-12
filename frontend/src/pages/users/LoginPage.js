import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import LoginForm from "./components/LoginForm";

import { Layout } from "antd";
import styles from "../../styles/styles";

const { USERS, LOGIN } = navigationTitles;

class LoginPage extends Component {
    state = {};

    render() {
        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/" />;
        }
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent section={USERS} page={LOGIN} />
                <LoginForm />
            </Layout>
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
