import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { users } from "../../../_store/_actions";
import serverStatuses from "../../../_config/serverStatuses";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import UsersEditForm from "../data/UsersEditForm";

import { Layout } from "antd";

const { ADMIN_USERS, EDITOR } = navigationTitles;
const { STATUS_OK } = serverStatuses;

class UserEditor extends Component {
    componentDidMount() {
        this.props.showUserProfile(this.props.match.params._id);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.status !== this.props.status &&
            this.props.status === STATUS_OK
        ) {
            this.props.showUserProfile(this.props.match.params._id);
        }
    }

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={EDITOR}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <ButtonComponent
                            form="edit-user-form"
                            htmlType="submit"
                            icon="user"
                            text="Edytuj użytkownika"
                            type="primary"
                        />
                    }
                />
                <UsersEditForm idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserEditor);
