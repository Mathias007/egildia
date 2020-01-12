import React, { Component } from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import UsersTable from "../data/UsersTable";

import { Button, Layout, PageHeader } from "antd";

const componentStyles = {
    layout: { padding: "0 24px 24px" }
};

const componentClassnames = {
    layout: "admin-users-layout"
};

const { ADMIN_USERS, LIST } = navigationTitles;

class UsersList extends Component {
    render() {
        return (
            <Layout
                className={componentClassnames.layout}
                style={componentStyles.layout}
            >
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={LIST}
                />
                <div>
                    <PageHeader
                        title="Lista użytkowników"
                        subTitle="Panel administracyjny"
                        extra={
                            <Button
                                icon="user-add"
                                type="primary"
                                className="add-user-button"
                            >
                                <Link to="users/add"> Dodaj użytkownika</Link>
                            </Button>
                        }
                    />
                </div>
                <UsersTable />
            </Layout>
        );
    }
}

export default UsersList;
