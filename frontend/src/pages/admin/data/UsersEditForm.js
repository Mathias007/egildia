import React, { Component } from "react";
import { connect } from "react-redux";

import { users } from "../../../_store/_actions";

import SingleFormElement from "../../components/SingleFormElement";
import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";

import { Form, Layout } from "antd";
import styles from "../../../styles/styles";

const { Content } = Layout;

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{7,}$/g;
const selectRoleOptions = ["USER", "ADMIN", "WRITER"]

class UserEditForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        let modificationDate = new Date();
        const { validateFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.editSelectedUser(
                    this.props.idParam,
                    values.username,
                    values.email,
                    values.password,
                    values.role,
                    modificationDate
                );
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { selectedUser } = this.props;
        return (
            <Content style={styles.content}>
                <Form onSubmit={this.handleSubmit} id="edit-user-form">
                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="username"
                        initialValue={selectedUser.name}
                        inputIcon="user"
                        label="Nazwa użytkownika"
                        message="Określ unikalną nazwę użytkownika!"
                        placeholder="Podaj nazwę użytkownika"
                        required
                        Tooltip="Nazwą użytkownika jest ciąg znaków identyfikujący internautę w serwisie."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="email"
                        fieldType="email"
                        initialValue={selectedUser.email}
                        inputIcon="mail"
                        label="Zawartość artykułu"
                        message="Podaj poprawny adres e-mail!"
                        placeholder="Podaj adres e-mail"
                        required
                        Tooltip="Adres e-mail powiązany z kontem."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="password"
                        fieldType="password"
                        inputIcon="key"
                        label="Hasło"
                        message="Wpisz swoje hasło!"
                        minLength={8}
                        pattern={passwordPattern}
                        placeholder="Wpisz hasło użytkownika."
                        required={false}
                        Tooltip="Hasło powinno składać się z conajmniej 8 znaków, zawierać literę oraz cyfrę."
                    />

                    <SingleFormElement
                        getFieldDecorator={getFieldDecorator}
                        fieldName="role"
                        fieldType="select"
                        initialValue={selectedUser.role}
                        options={selectRoleOptions}
                        label="Rola w serwisie"
                        message="Wpisz swoje hasło!"
                        required={false}
                    />

                    <ButtonComponent
                        composition="double"
                        cancelLink="/admin/users"
                        cancelText="Zrezygnuj"
                        htmlType="submit"
                        icon="user"
                        text="Edytuj użytkownika"
                        type="primary"
                    />
                    <ErrorMessageComponent
                        errorMessage={this.props.errorMessage}
                    />
                </Form>
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
        editSelectedUser: (
            username,
            email,
            password,
            role,
            modificationDate
        ) => {
            return dispatch(
                users.editSelectedUser(
                    username,
                    email,
                    password,
                    role,
                    modificationDate
                )
            );
        }
    };
};

UserEditForm = connect(mapStateToProps, mapDispatchToProps)(UserEditForm);

export default Form.create()(UserEditForm);
