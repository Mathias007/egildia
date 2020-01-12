import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import NewsAddForm from "../data/NewsAddForm";

import { Button, Layout } from "antd";
import styles from "../../../styles/styles";

const { ADMIN_NEWS, CREATOR } = navigationTitles;

const buttonData = {
    icon: "file-add",
    type: "primary",
    htmlType: "submit",
    form: "add-news-form",
    text: "Dodaj wpis"
};

class NewsCreator extends Component {
    render() {
        const { icon, type, htmlType, form, text } = buttonData;
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminComponent
                    section={ADMIN_NEWS}
                    page={CREATOR}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <Button
                            icon={icon}
                            type={type}
                            htmlType={htmlType}
                            form={form}
                        >
                            {text}
                        </Button>
                    }
                />
                <NewsAddForm />
            </Layout>
        );
    }
}

export default NewsCreator;
