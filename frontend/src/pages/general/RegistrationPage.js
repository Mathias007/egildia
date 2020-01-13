import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import navigationTitles from "../../_config/navigationTitles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import RegistrationForm from "./components/RegistrationForm";

import { Layout } from "antd";
import styles from "../../styles/styles";

const { USERS, REGISTER, REGISTER_FORM } = navigationTitles;

class RegistrationPage extends Component {
    render() {
        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/" />;
        }

        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent section={USERS} page={REGISTER} />
                <PageHeaderComponent shortHeader title={REGISTER_FORM} />
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
