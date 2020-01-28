import React, { Component } from "react";
import { connect } from "react-redux";

import {
    passwordPattern,
    siteRoles
} from "../../../../_config/globalContentVariables";
import { users } from "../../../../_store/_actions";
import linksPaths from "../../../../_config/linksPaths";
import serverStatuses from "../../../../_config/serverStatuses";
import styles from "../../../../styles/styles";

import SingleFormElement from "../../../components/universal/SingleFormElement";
import ButtonComponent from "../../../components/universal/ButtonComponent";
import ErrorMessageComponent from "../../../components/universal/ErrorMessageComponent";
import Success from "../../../components/errors/Success";

import { Form, Layout } from "antd";
const { Content } = Layout;

const { USERS } = linksPaths;
const { STATUS_OK } = serverStatuses;

class UsersAddForm extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const { validateFields, resetFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.register(
                    values.username,
                    values.email,
                    values.password,
                    values.role,
                    values.date
                );
                resetFields();
            }
        });
    };

    render() {
        if (this.props.status === STATUS_OK)
            return (
                <Success
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={USERS.MAIN}
                    description="Czy chcesz kontynuować pracę?"
                />
            );
        else {
            const { getFieldDecorator } = this.props.form;
            return (
                <Content style={styles.content}>
                    <Form onSubmit={this.handleSubmit} id="add-user-form">
                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
                            fieldName="username"
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
                            required
                            Tooltip="Hasło powinno składać się z conajmniej 8 znaków, zawierać literę oraz cyfrę."
                        />
                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
                            fieldName="role"
                            fieldType="select"
                            initialValue="USER"
                            options={siteRoles}
                            label="Rola w serwisie"
                            message="Wpisz swoje hasło!"
                            required={false}
                        />
                        <SingleFormElement
                            getFieldDecorator={getFieldDecorator}
                            fieldName="date"
                            fieldType="date"
                            label="Data dodania lub utworzenia (pole nieobowiązkowe)"
                            inputIcon="calendar"
                            placeholder="Data utworzenia (domyślnie wygenerowana zostanie aktualna)"
                            required={false}
                        />
                        <ButtonComponent
                            htmlType="submit"
                            icon="user-add"
                            text="Dodaj użytkownika"
                            type="primary"
                        />
                        <ErrorMessageComponent
                            status={this.props.status}
                            errorMessage={this.props.errorMessage}
                        />
                    </Form>
                </Content>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.users.errorMessage,
        status: state.users.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: (username, email, password, role, date) => {
            return dispatch(
                users.register(username, email, password, role, date)
            );
        },
        cleanServerStatus: () => {
            return dispatch(users.cleanServerStatus());
        }
    };
};

UsersAddForm = connect(mapStateToProps, mapDispatchToProps)(UsersAddForm);

export default Form.create()(UsersAddForm);
