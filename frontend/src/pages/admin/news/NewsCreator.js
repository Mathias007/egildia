import React, { Component } from "react";

import navigationTitles from "../../../_config/navigationTitles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import NewsAddForm from "../data/NewsAddForm";

import { Button, Layout, PageHeader } from "antd";

const { ADMIN_NEWS, CREATOR } = navigationTitles;

class NewsCreator extends Component {
    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_NEWS}
                    page={CREATOR}
                />
                <div>
                    <PageHeader
                        onBack={() => window.history.back()}
                        title="Powrót"
                        subTitle="Panel administracyjny"
                        extra={
                            <Button
                                icon="file-add"
                                type="primary"
                                htmlType="submit"
                                className="create-news-button"
                            >
                                Dodaj wpis{" "}
                            </Button>
                        }
                    />
                </div>
                <NewsAddForm />
            </Layout>
        );
    }
}

export default NewsCreator;
