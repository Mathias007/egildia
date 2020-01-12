import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { users } from "../../../_store/_actions";

import { Button, Divider, Form, Layout } from "antd";
const { Item } = Form;
const { Content } = Layout;

class UsersRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedUser(this.props.idParam);
    };

    render() {
        const { selectedUser } = this.props;

        return (
            <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                }}
            >
                <p>
                    Czy na pewno chcesz usunąć użytkownika o nazwie{" "}
                    <strong>{selectedUser.name}</strong>? Tej operacji nie
                    będzie można cofnąć.
                </p>
                <Item className="btn-wrap">
                    <Button
                        icon="user-delete"
                        type="primary"
                        htmlType="submit"
                        className="remove-user-button"
                        onClick={this.handleDeletingSubmit}
                    >
                        Usuń użytkownika
                    </Button>
                    <Divider type="vertical" dashed style={{ border: 0 }} />
                    <Button>
                        <Link to="/admin/users">Zrezygnuj</Link>
                    </Button>
                </Item>
                <Item>{this.props.errorMessage}</Item>
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
