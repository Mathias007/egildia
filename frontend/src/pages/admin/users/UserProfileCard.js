import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import serverStatuses from "../../../_config/serverStatuses";
import { users } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import UsersCard from "../data/UsersCard";

import { Layout } from "antd";

const { ADMIN_USERS } = navigationTitles;
const { STATUS_OK } = serverStatuses;

class UserProfileCard extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showUserProfile(this.props.match.params._id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.status === STATUS_OK) {
            this.props.showUserProfile(this.props.match.params._id);
        }
    }

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={this.props.selectedUser.name}
                />
                <UsersCard idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedUser: state.users.selectedUser,
        status: state.users.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showUserProfile: id => {
            return dispatch(users.showUserProfile(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileCard);
