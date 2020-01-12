import React, { Component } from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import UsersTable from "../data/UsersTable";

import { Button, Layout } from "antd";
import styles from "../../../styles/styles";

const { ADMIN_USERS, LIST } = navigationTitles;

const buttonData = {
    icon: "user-add",
    type: "primary",
    text: "Dodaj użytkownika"
};

class UsersList extends Component {
    render() {
        const { icon, type, text } = buttonData;
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={LIST}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <Link to="users/add">
                            <Button icon={icon} type={type}>
                                {text}
                            </Button>
                        </Link>
                    }
                />
                <UsersTable />
            </Layout>
        );
    }
}

export default UsersList;
