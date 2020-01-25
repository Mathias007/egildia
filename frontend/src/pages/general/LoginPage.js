import React from "react";

import navigationTitles from "../../_config/navigationTitles";
import styles from "../../styles/styles";

import BreadcrumbComponent from "../global/BreadcrumbComponent";
import PageHeaderComponent from "../components/PageHeaderComponent";
import LoginForm from "./components/LoginForm";

import { Layout } from "antd";

const { USERS, LOGIN, LOGIN_FORM } = navigationTitles;

export default function LoginPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent section={USERS} page={LOGIN} />
            <PageHeaderComponent shortHeader title={LOGIN_FORM} />
            <LoginForm />
        </Layout>
    );
}
