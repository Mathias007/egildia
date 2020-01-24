import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";
import serverStatuses from "../../../_config/serverStatuses";
import styles from "../../../styles/styles";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import NewsEditForm from "../data/NewsEditForm";

import { Layout } from "antd";

const { ADMIN_NEWS, EDITOR } = navigationTitles;
const { STATUS_OK } = serverStatuses;

class NewsEditor extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.status === STATUS_OK) {
            this.props.showProperNews(this.props.match.params._id);
        }
    }

    render() {
        return (
            <Layout style={styles.layout}>
                <BreadcrumbComponent
                    isAdminComponent
                    section={ADMIN_NEWS}
                    page={EDITOR}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <ButtonComponent
                            form="edit-news-form"
                            htmlType="submit"
                            icon="edit"
                            text="Edytuj wpis"
                            type="primary"
                        />
                    }
                />
                <NewsEditForm idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        status: state.news.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showProperNews: id => {
            return dispatch(news.showProperNews(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsEditor);
