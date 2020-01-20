import React from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import NewsTable from "../data/NewsTable";

import { Layout } from "antd";

const { ADMIN_NEWS, LIST } = navigationTitles;

export default function NewsList(props) {
    return (
        <Layout style={styles.layout}>
            <BreadcrumbComponent
                isAdminComponent
                section={ADMIN_NEWS}
                page={LIST}
            />
            <PageHeaderComponent
                isAdminComponent
                button={
                    <Link to="news/add">
                        <ButtonComponent
                            icon="file-add"
                            text="Dodaj wpis"
                            type="primary"
                        />
                    </Link>
                }
            />
            <NewsTable />
        </Layout>
    );
}
