import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import UsersAddForm from "../data/UsersAddForm";

import { Button, Layout } from "antd";

const { ADMIN_USERS, CREATOR } = navigationTitles;

const buttonData = {
    icon: "user-add",
    type: "primary",
    htmlType: "submit",
    form: "add-user-form",
    text: "Dodaj użytkownika"
};

class UserCreator extends Component {
    render() {
        const { icon, type, htmlType, form, text } = buttonData;
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={CREATOR}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <Button
                            icon={icon}
                            type={type}
                            htmlType={htmlType}
                            form={form}
                        >
                            {text}
                        </Button>
                    }
                />
                <UsersAddForm />
            </Layout>
        );
    }
}

export default UserCreator;
