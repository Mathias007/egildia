import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import serverStatuses from "../../../_config/serverStatuses";
import { users } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import {
    generateAvatar,
    generateCardTitle,
    generateMetaDescription
} from "../components/_helpers/adminDataGenerators";

import BreadcrumbComponent from "../../components/global/BreadcrumbComponent";
import UsersCardForm from "../components/users/UsersCardForm";

import { Card, Layout } from "antd";
const { Meta } = Card;

const { ADMIN_USERS } = navigationTitles;
const { STATUS_OK } = serverStatuses;

const captions = {
    cardTitle: "Profil użytkownika:",
    metaDescription: "Data rejestracji:"
};

class UserSingleProfile extends Component {
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
        const { name, date } = this.props.selectedUser;
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={this.props.selectedUser.name}
                />
                <Card
                    type="inner"
                    style={styles.card}
                    title={generateCardTitle(name, captions.cardTitle)}
                >
                    <Meta
                        avatar={generateAvatar(name)}
                        description={generateMetaDescription(
                            date,
                            captions.metaDescription
                        )}
                    />
                    <UsersCardForm idParam={this.props.match.params._id} />
                </Card>
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
        },
        cleanServerStatus: () => {
            return dispatch(users.cleanServerStatus());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSingleProfile);
