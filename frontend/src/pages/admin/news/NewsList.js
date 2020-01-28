import React from "react";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../components/global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/universal/PageHeaderComponent";
import ButtonComponent from "../../components/universal/ButtonComponent";
import NewsTable from "../components/news/NewsTable";

import { Layout } from "antd";

const { ADMIN_NEWS, LIST } = navigationTitles;
const { NEWS } = linksPaths;

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
                    <Link to={NEWS.ADD}>
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
