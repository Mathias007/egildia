import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import NewsTable from "../data/NewsTable";

import { Button, Layout, PageHeader } from "antd";

const componentStyles = {
    layout: { padding: "0 24px 24px" }
};

const componentClassnames = {
    layout: "admin-news-layout"
};

const { ADMIN_NEWS, LIST } = navigationTitles;

class NewsList extends Component {
    render() {
        return (
            <Layout
                className={componentClassnames.layout}
                style={componentStyles.layout}
            >
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_NEWS}
                    page={LIST}
                />
                <div>
                    <PageHeader
                        title="Lista wpisów"
                        subTitle="Panel administracyjny"
                        extra={
                            <Button
                                icon="file-add"
                                type="primary"
                                className="add-news-button"
                            >
                                <Link to="news/add"> Dodaj wpis</Link>
                            </Button>
                        }
                    />
                </div>

                <NewsTable />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showNewsList: () => dispatch(news.showNewsList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
