import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/pl";

import { users } from "../../../_store/_actions";
import {
    dateFormat,
    passwordPattern,
    siteRoles
} from "../../../_config/globalContentVariables";
import linksPaths from "../../../_config/linksPaths";
import serverStatuses from "../../../_config/serverStatuses";
import styles from "../../../styles/styles";

import SingleFormElement from "../../components/SingleFormElement";
import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";
import Success from "../../errors/Success";

import { Avatar, Card, Form } from "antd";
const { Meta } = Card;

const { GENERAL, USERS } = linksPaths;
const { STATUS_OK } = serverStatuses;

class UsersCard extends Component {
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
            const { getFieldDecorator } = this.props.form;
            const { name, email, role, date } = this.props.selectedUser;
            return (
                <Card
                    type="inner"
                    style={styles.card}
                    title={
                        <span>
                            Profil użytkownika: <strong>{name}</strong>
                        </span>
                    }
                >
                    <Meta
                        avatar={
                            <Avatar style={styles.userAvatar} size="large">
                                {name}
                            </Avatar>
                        }
                        description={
                            <span>
                                Data rejestracji:{" "}
                                {moment(date).format(dateFormat)}
                            </span>
                        }
                    />
                    <Form onSubmit={this.handleSubmit} id="edit-user-form">
                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
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
                            getFieldDecorator={getFieldDecorator}
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
                </Card>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.users.errorMessage,
        selectedUser: state.users.selectedUser,
        status: state.users.status
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
        },
        cleanServerStatus: () => {
            return dispatch(users.cleanServerStatus());
        }
    };
};

UsersCard = connect(mapStateToProps, mapDispatchToProps)(UsersCard);

export default Form.create()(UsersCard);
