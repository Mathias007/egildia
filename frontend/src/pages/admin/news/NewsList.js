import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import NewsTable from "../data/NewsTable";

import { Button, Layout } from "antd";
import styles from "../../../styles/styles";

const { ADMIN_NEWS, LIST } = navigationTitles;

const buttonData = {
    icon: "file-add",
    type: "primary",
    text: "Dodaj wpis"
};

class NewsList extends Component {
    render() {
        const { icon, type, text } = buttonData;
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
                            <Button icon={icon} type={type}>
                                {text}
                            </Button>
                        </Link>
                    }
                />
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
