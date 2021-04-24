import React, { Component } from "react";
import { connect } from "react-redux";

import { users } from "../../../../_store/_actions";
import linksPaths from "../../../../_config/linksPaths";
import serverStatuses from "../../../../_config/serverStatuses";
import styles from "../../../../styles/styles";

import ButtonComponent from "../../../components/universal/ButtonComponent";
import ErrorMessageComponent from "../../../components/universal/ErrorMessageComponent";
import Success from "../../../components/errors/Success";

import { Layout } from "antd";
const { Content } = Layout;

const { USERS } = linksPaths;
const { STATUS_OK } = serverStatuses;

class UsersRemoveForm extends Component {
    handleDeletingSubmit = (e) => {
        e.preventDefault();
        this.props.deleteSelectedUser(this.props.idParam);
    };

    render() {
        if (this.props.status === STATUS_OK)
            return (
                <Success
                    oneButton
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={USERS.MAIN}
                    description="Możesz wrócić do listy artykułów"
                />
            );
        else {
            const { selectedUser } = this.props;
            return (
                <Content style={styles.content}>
                    <p>
                        Czy na pewno chcesz usunąć użytkownika o nazwie{" "}
                        <strong>{selectedUser.name}</strong>? Tej operacji nie
                        będzie można cofnąć.
                    </p>

                    <ButtonComponent
                        composition="double"
                        cancelLink={USERS.MAIN}
                        cancelText="Zrezygnuj"
                        htmlType="submit"
                        icon="user-delete"
                        onClick={this.handleDeletingSubmit}
                        text="Usuń użytkownika"
                        type="primary"
                    />
                    <ErrorMessageComponent
                        status={this.props.status}
                        errorMessage={this.props.errorMessage}
                    />
                </Content>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.users.errorMessage,
        selectedUser: state.users.selectedUser,
        status: state.users.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSelectedUser: (id) => {
            return dispatch(users.deleteSelectedUser(id));
        },
        cleanServerStatus: () => {
            return dispatch(users.cleanServerStatus());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersRemoveForm);
