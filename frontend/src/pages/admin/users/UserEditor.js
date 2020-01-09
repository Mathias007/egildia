import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import { users } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import {
    Button,
    Divider,
    Form,
    Icon,
    Input,
    Layout,
    PageHeader,
    Select,
    Tooltip
} from "antd";

const { Item } = Form;
const { Password } = Input;
const { Content } = Layout;
const { Option } = Select;

const { ADMIN_USERS, EDITOR } = navigationTitles;

class UserEditor extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showUserProfile(this.props.match.params._id);
    }

    handleSubmit = e => {
        e.preventDefault();

        let modificationDate = new Date();
        const { validateFields } = this.props.form;

        validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.editSelectedUser(
                    this.props.match.params._id,
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
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={EDITOR}
                />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    <Form
                        onSubmit={this.handleSubmit}
                        className="edit-user-form"
                    >
                        <div>
                            <PageHeader
                                onBack={() => window.history.back()}
                                title="Powrót"
                                subTitle="Panel administracyjny"
                                extra={
                                    <Button
                                        icon="user"
                                        type="primary"
                                        htmlType="submit"
                                        className="edit-user-button"
                                    >
                                        Edytuj użytkownika{" "}
                                    </Button>
                                }
                            />
                        </div>
                        <Item label="Nazwa użytkownika">
                            {getFieldDecorator("username", {
                                initialValue: selectedUser.name,
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
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    suffix={
                                        <Tooltip title="Nazwą użytkownika jest ciąg znaków identyfikujący internautę w serwisie.">
                                            <Icon
                                                type="info-circle"
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
                                            />
                                        </Tooltip>
                                    }
                                    placeholder="Podaj nazwę użytkownika"
                                />
                            )}
                        </Item>

                        <Item label="Adres e-mail">
                            {getFieldDecorator("email", {
                                initialValue: selectedUser.email,
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
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    suffix={
                                        <Tooltip title="Adres e-mail powiązany z kontem.">
                                            <Icon
                                                type="info-circle"
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
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
                                        <Icon
                                            type="key"
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    suffix={
                                        <Tooltip title="Hasło powinno składać się z conajmniej 8 znaków, zawierać literę oraz cyfrę.">
                                            <Icon
                                                type="info-circle"
                                                style={{
                                                    color: "rgba(0,0,0,.45)"
                                                }}
                                            />
                                        </Tooltip>
                                    }
                                    placeholder="Wpisz hasło użytkownika."
                                />
                            )}
                        </Item>

                        <Item label="Rola w serwisie">
                            {getFieldDecorator("role", {
                                initialValue: selectedUser.role,
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
                            <Button
                                icon="user"
                                type="primary"
                                htmlType="submit"
                                className="edit-user-button"
                            >
                                Edytuj użytkownika{" "}
                            </Button>
                            <Divider
                                type="vertical"
                                dashed
                                style={{ border: 0 }}
                            />
                            <Button>
                                <Link to="/admin/users">Zrezygnuj</Link>
                            </Button>
                        </Item>
                        <Item>{this.props.errorMessage}</Item>
                    </Form>
                </Content>
            </Layout>
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
        showUserProfile: id => {
            return dispatch(users.showUserProfile(id));
        },
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

UserEditor = connect(mapStateToProps, mapDispatchToProps)(UserEditor);

export default Form.create()(UserEditor);
