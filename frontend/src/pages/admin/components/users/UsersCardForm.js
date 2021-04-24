import React, { Component } from "react";
import { connect } from "react-redux";

import { users } from "../../../../_store/_actions";
import {
    passwordPattern,
    siteRoles,
} from "../../../../_config/globalContentVariables";
import linksPaths from "../../../../_config/linksPaths";
import serverStatuses from "../../../../_config/serverStatuses";

import SingleFormElement from "../../../components/universal/SingleFormElement";
import ButtonComponent from "../../../components/universal/ButtonComponent";
import ErrorMessageComponent from "../../../components/universal/ErrorMessageComponent";
import Success from "../../../components/errors/Success";

import { Form } from "antd";

const { GENERAL, USERS } = linksPaths;
const { STATUS_OK } = serverStatuses;

class UsersCardForm extends Component {
    handleSubmit = (values) => {
        let modificationDate = new Date();

        console.log("Received values of form: ", values);
        this.props.editSelectedUser(
            this.props.idParam,
            values.username,
            values.email,
            values.password,
            values.role,
            modificationDate
        );
    };

    render() {
        if (this.props.status === STATUS_OK)
            return (
                <Success
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={GENERAL.INDEX}
                    description="Czy chcesz wrócić do edycji profilu?"
                />
            );
        else {
            const { name, email, role } = this.props.selectedUser;
            return (
                <Form onFinish={this.handleSubmit} id="edit-user-form">
                    <SingleFormElement
                        fieldName="username"
                        initialValue={name}
                        inputIcon="user"
                        label="Nazwa użytkownika"
                        message="Określ unikalną nazwę użytkownika!"
                        placeholder="Podaj nazwę użytkownika"
                        required
                        Tooltip="Nazwą użytkownika jest ciąg znaków identyfikujący internautę w serwisie."
                    />

                    <SingleFormElement
                        fieldName="email"
                        fieldType="email"
                        initialValue={email}
                        inputIcon="mail"
                        label="Zawartość artykułu"
                        message="Podaj poprawny adres e-mail!"
                        placeholder="Podaj adres e-mail"
                        required
                        Tooltip="Adres e-mail powiązany z kontem."
                    />

                    <SingleFormElement
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
                        fieldName="role"
                        fieldType="select"
                        initialValue={role}
                        options={siteRoles}
                        label="Rola w serwisie"
                        message="Wpisz swoje hasło!"
                        required={false}
                    />

                    <ButtonComponent
                        composition="double"
                        cancelLink={USERS.MAIN}
                        cancelText="Zrezygnuj"
                        htmlType="submit"
                        icon="user"
                        text="Edytuj profil"
                        type="primary"
                    />
                    <ErrorMessageComponent
                        status={this.props.status}
                        errorMessage={this.props.errorMessage}
                    />
                </Form>
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
        },
        cleanServerStatus: () => {
            return dispatch(users.cleanServerStatus());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersCardForm);
