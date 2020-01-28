import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import NewsRemoveForm from "../data/NewsRemoveForm";

import { Layout } from "antd";

const { ADMIN_NEWS, REMOVER } = navigationTitles;

class NewsRemover extends Component {
    componentDidMount() {
        this.props.showProperNews(this.props.match.params._id);
    }

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminComponent
                    section={ADMIN_NEWS}
                    page={REMOVER}
                />
                <PageHeaderComponent isAdminComponent />
                <NewsRemoveForm idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showProperNews: id => {
            return dispatch(news.showProperNews(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsRemover);
