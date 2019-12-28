import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import GlobalPageHeader from "./components/GlobalPageHeader";
import GlobalSidebar from "./components/GlobalSidebar";
import GlobalPageFooter from "./components/GlobalPageFooter";

import RegistrationPageForm from "./RegistrationPageForm";

import { Layout } from "antd";

class RegistrationPage extends Component {
    render() {
        if (this.props.isAuthenticated || this.props.remember) {
            return <Redirect to="/knights" />;
        }

        return (
            <div className="App-container">
                <Layout>
                    <GlobalPageHeader />
                    <Layout>
                        <GlobalSidebar />
                        <RegistrationPageForm />
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
        remember: state.auth.remember
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
