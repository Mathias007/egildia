import React from "react";

import navigationTitles from "../../../_config/navigationTitles";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/universal/PageHeaderComponent";
import ButtonComponent from "../../components/universal/ButtonComponent";
import UsersAddForm from "../components/users/UsersAddForm";

import { Layout } from "antd";

const { ADMIN_USERS, CREATOR } = navigationTitles;

export default function UserCreator(props) {
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
