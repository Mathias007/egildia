import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { users } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import UsersRemoveForm from "../data/UsersRemoveForm";

import { Layout } from "antd";

const { ADMIN_USERS, REMOVER } = navigationTitles;

class UserRemover extends Component {
    componentDidMount() {
        this.props.showUserProfile(this.props.match.params._id);
    }

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={REMOVER}
                />
                <PageHeaderComponent isAdminComponent />
                <UsersRemoveForm idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showUserProfile: id => {
            return dispatch(users.showUserProfile(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRemover);
