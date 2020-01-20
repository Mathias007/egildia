import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import UsersAddForm from "../data/UsersAddForm";

import { Layout } from "antd";

const { ADMIN_USERS, CREATOR } = navigationTitles;

class UserCreator extends Component {
    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_USERS}
                    page={CREATOR}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <ButtonComponent
                            form="add-user-form"
                            htmlType="submit"
                            icon="user-add"
                            text="Dodaj użytkownika"
                            type="primary"
                        />
                    }
                />
                <UsersAddForm />
            </Layout>
        );
    }
}

export default UserCreator;
