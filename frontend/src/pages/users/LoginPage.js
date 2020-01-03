import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "./components/LoginForm";

class LoginPage extends Component {
    state = {};

    render() {
        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/knights/" />;
        }
        return <LoginForm />;
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
