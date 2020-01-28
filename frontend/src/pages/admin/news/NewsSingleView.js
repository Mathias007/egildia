import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import NewsCard from "../data/NewsCard";

import { Layout } from "antd";

const { ADMIN_NEWS } = navigationTitles;

class NewsSingleCard extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    section={ADMIN_NEWS}
                    page={this.props.properNews.title}
                />
                <NewsCard idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return { properNews: state.news.properNews };
};

const mapDispatchToProps = dispatch => {
    return {
        showProperNews: id => {
            return dispatch(news.showProperNews(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSingleCard);
