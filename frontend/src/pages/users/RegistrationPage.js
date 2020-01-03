import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import RegistrationForm from "./components/RegistrationForm";

class RegistrationPage extends Component {
    render() {
        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/knights" />;
        }

        return <RegistrationForm />;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        remember: state.auth.remember
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
