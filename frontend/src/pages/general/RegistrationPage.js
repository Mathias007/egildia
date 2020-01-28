import React from "react";

import navigationTitles from "../../_config/navigationTitles";
import styles from "../../styles/styles";

import BreadcrumbComponent from "../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../components/universal/PageHeaderComponent";
import RegistrationForm from "./components/RegistrationForm";

import { Layout } from "antd";

const { USERS, REGISTER, REGISTER_FORM } = navigationTitles;

export default function RegistrationPage(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent section={USERS} page={REGISTER} />
            <PageHeaderComponent shortHeader title={REGISTER_FORM} />
            <RegistrationForm />
        </Layout>
    );
}
