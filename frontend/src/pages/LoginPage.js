import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import GlobalPageHeader from "./components/GlobalPageHeader";
import GlobalSidebar from "./components/GlobalSidebar";
import GlobalPageFooter from "./components/GlobalPageFooter";
import LoginPageForm from "./LoginPageForm";

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
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <LoginPageForm />
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

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
