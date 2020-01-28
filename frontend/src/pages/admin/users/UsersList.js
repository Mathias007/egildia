import React, { Component } from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/universal/PageHeaderComponent";
import ButtonComponent from "../../components/universal/ButtonComponent";
import UsersTable from "../components/users/UsersTable";

import { Layout } from "antd";

const { ADMIN_USERS, LIST } = navigationTitles;
const { USERS } = linksPaths;

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
                        <Link to={USERS.ADD}>
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
