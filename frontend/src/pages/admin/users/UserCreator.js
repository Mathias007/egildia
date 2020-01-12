import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import UsersAddForm from "../data/UsersAddForm";

import { Button, Layout, PageHeader } from "antd";

const { ADMIN_USERS, CREATOR } = navigationTitles;

class UserCreator extends Component {
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={CREATOR}
                />
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
                <UsersAddForm />
            </Layout>
        );
    }
}

export default UserCreator;
