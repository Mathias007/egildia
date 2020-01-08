import React, { Component } from "react";
import locale from "antd/es/date-picker/locale/pl_PL";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { users } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import {
    Button,
    DatePicker,
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

const { ADMIN_USERS, CREATOR } = navigationTitles;

class UserCreator extends Component {
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
        const { getFieldDecorator } = this.props.form;

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={CREATOR}
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
                        className="add-user-form"
                    >
                        <div>
                            <PageHeader
                                onBack={() => window.history.back()}
                                title="Powrót"
                                subTitle="Panel administracyjny"
                                extra={
                                    <Button
                                        icon="user-add"
                                        type="primary"
                                        htmlType="submit"
                                        className="create-user-button"
                                    >
                                        Dodaj użytkownika{" "}
                                    </Button>
                                }
                            />
                        </div>
                        <Item label="Nazwa użytkownika">
                            {getFieldDecorator("username", {
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
                                        required: true,
                                        message: "Wpisz swoje hasło!"
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
                                rules: [
                                    {
                                        required: false
                                    }
                                ]
                            })(
                                <Select defaultValue="USER">
                                    <Option value="USER">USER</Option>
                                    <Option value="ADMIN">ADMIN</Option>
                                    <Option value="WRITER">WRITER</Option>
                                </Select>
                            )}
                        </Item>

                        <Item label="Data utworzenia konta (pole nieobowiązkowe)">
                            {getFieldDecorator("date", {
                                rules: [
                                    {
                                        type: "object",
                                        required: false
                                    }
                                ]
                            })(
                                <DatePicker
                                    locale={locale}
                                    style={{ width: "100%" }}
                                    suffixIcon={
                                        <Icon
                                            type="calendar"
                                            style={{
                                                color: "rgba(0,0,0,.25)"
                                            }}
                                        />
                                    }
                                    showTime
                                    showToday
                                    format="LLLL"
                                    placeholder="Data utworzenia (domyślnie wygenerowana zostanie aktualna)"
                                />
                            )}
                        </Item>

                        <Item className="btn-wrap">
                            <Button
                                icon="user-add"
                                type="primary"
                                htmlType="submit"
                                className="create-user-button"
                            >
                                Dodaj użytkownika{" "}
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
        errorMessage: state.users.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        register: (username, email, password, role, date) => {
            return dispatch(
                users.register(username, email, password, role, date)
            );
        }
    };
};

UserCreator = connect(mapStateToProps, mapDispatchToProps)(UserCreator);

export default Form.create()(UserCreator);
