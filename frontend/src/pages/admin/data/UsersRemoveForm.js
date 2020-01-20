import React, { Component } from "react";
import { connect } from "react-redux";

import { users } from "../../../_store/_actions";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";

import { Form, Layout } from "antd";
const { Content } = Layout;

const { USERS } = linksPaths;

class UsersRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedUser(this.props.idParam);
    };

    render() {
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
                <ErrorMessageComponent errorMessage={this.props.errorMessage} />
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.users.errorMessage,
        selectedUser: state.users.selectedUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteSelectedUser: id => {
            return dispatch(users.deleteSelectedUser(id));
        }
    };
};

UsersRemoveForm = connect(mapStateToProps, mapDispatchToProps)(UsersRemoveForm);

export default Form.create()(UsersRemoveForm);
