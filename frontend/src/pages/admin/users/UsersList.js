import React, { Component } from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import UsersTable from "../data/UsersTable";

import { Layout } from "antd";
import styles from "../../../styles/styles";

const { ADMIN_USERS, LIST } = navigationTitles;

class UsersList extends Component {
    render() {
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
                            <ButtonComponent
                                icon="user-add"
                                text="Dodaj użytkownika"
                                type="primary"
                            />
                        </Link>
                    }
                />
                <UsersTable />
            </Layout>
        );
    }
}

export default UsersList;
