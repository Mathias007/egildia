import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { users } from "../../../_store/_actions";

import { Button, Divider, Form, Layout } from "antd";
import styles from "../../../styles/styles";

const { Item } = Form;
const { Content } = Layout;

const buttonData = {
    icon: "user-delete",
    type: "primary",
    htmlType: "submit",
    text: "Usuń użytkownika"
};

class UsersRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedUser(this.props.idParam);
    };

    render() {
        const { selectedUser } = this.props;
        const { icon, type, htmlType, text } = buttonData;
        return (
            <Content style={styles.content}>
                <p>
                    Czy na pewno chcesz usunąć użytkownika o nazwie{" "}
                    <strong>{selectedUser.name}</strong>? Tej operacji nie
                    będzie można cofnąć.
                </p>
                <Item className="btn-wrap">
                    <Button icon={icon} type={type} htmlType={htmlType}>
                        {text}
                    </Button>
                    <Divider
                        type="vertical"
                        dashed
                        style={styles.hiddenDivider}
                    />
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
