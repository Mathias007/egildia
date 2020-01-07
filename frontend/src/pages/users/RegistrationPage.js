import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import RegistrationForm from "./components/RegistrationForm";

import { Layout } from "antd";

const { USERS, REGISTER } = navigationTitles;

class RegistrationPage extends Component {
    render() {
        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/" />;
        }

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent section={USERS} page={REGISTER} />
                <RegistrationForm />
            </Layout>
        );
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
