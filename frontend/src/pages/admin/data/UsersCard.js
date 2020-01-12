import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";

import { users } from "../../../_store/_actions";

import {
    Avatar,
    Button,
    Card,
    Divider,
    Form,
    Icon,
    Input,
    Select,
    Tooltip
} from "antd";
import styles from "../../../styles/styles";

const { Meta } = Card;
const { Item } = Form;
const { Password } = Input;
const { Option } = Select;

const buttonData = {
    icon: "user",
    type: "primary",
    htmlType: "submit",
    text: "Edytuj użytkownika"
};

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
        const { getFieldDecorator } = this.props.form;
        const { name, email, role, date } = this.props.selectedUser;
        const { icon, type, htmlType, text } = buttonData;
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
                            Data rejestracji: {moment(date).format("LLLL")}
                        </span>
                    }
                />
                <Form onSubmit={this.handleSubmit} className="edit-user-form">
                    <Item label="Nazwa użytkownika">
                        {getFieldDecorator("username", {
                            initialValue: name,
                            rules: [
                                {
                                    required: true,
                                    message:
                                        "Określ unikalną nazwę użytkownika!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Nazwą użytkownika jest ciąg znaków identyfikujący internautę w serwisie.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Podaj nazwę użytkownika"
                            />
                        )}
                    </Item>

                    <Item label="Adres e-mail">
                        {getFieldDecorator("email", {
                            initialValue: email,
                            rules: [
                                {
                                    type: "email",
                                    message: "Podaj poprawny adres e-mail!"
                                },
                                {
                                    required: true,
                                    message: "Wpisz adres e-mail!"
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="mail"
                                        style={styles.inputIcon}
                                    />
                                }
                                suffix={
                                    <Tooltip title="Adres e-mail powiązany z kontem.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Podaj adres e-mail"
                            />
                        )}
                    </Item>
                    <Item label="Hasło">
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: false
                                },
                                { min: 8, message: "Hasło za krótkie!" },
                                {
                                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{7,}$/g,
                                    message: "Hasło nie spełnia wymagań!"
                                }
                            ]
                        })(
                            <Password
                                prefix={
                                    <Icon type="key" style={styles.inputIcon} />
                                }
                                suffix={
                                    <Tooltip title="Hasło powinno składać się z conajmniej 8 znaków, zawierać literę oraz cyfrę.">
                                        <Icon
                                            type="info-circle"
                                            style={styles.tooltipIcon}
                                        />
                                    </Tooltip>
                                }
                                placeholder="Wpisz hasło użytkownika."
                            />
                        )}
                    </Item>

                    <Item label="Rola w serwisie">
                        {getFieldDecorator("role", {
                            initialValue: role,
                            rules: [
                                {
                                    required: false
                                }
                            ]
                        })(
                            <Select>
                                <Option value="USER">USER</Option>
                                <Option value="ADMIN">ADMIN</Option>
                                <Option value="WRITER">WRITER</Option>
                            </Select>
                        )}
                    </Item>

                    <Item className="btn-wrap">
                        <Button icon={icon} type={type} htmlType={htmlType}>
                            {text}
                        </Button>
                        <Divider type="vertical" dashed style={{ border: 0 }} />
                        <Button>
                            <Link to="/admin/users">Zrezygnuj</Link>
                        </Button>
                    </Item>
                    <Item>{this.props.errorMessage}</Item>
                </Form>
            </Card>
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

UsersCard = connect(mapStateToProps, mapDispatchToProps)(UsersCard);

export default Form.create()(UsersCard);
