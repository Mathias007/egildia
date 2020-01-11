import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import NewsEditForm from "../data/NewsEditForm";

import { Button, Layout, PageHeader } from "antd";

const { ADMIN_NEWS, EDITOR } = navigationTitles;

class NewsEditor extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_NEWS}
                    page={EDITOR}
                />
                <div>
                    <PageHeader
                        onBack={() => window.history.back()}
                        title="Powrót"
                        subTitle="Panel administracyjny"
                        extra={
                            <Button
                                icon="edit"
                                type="primary"
                                htmlType="submit"
                                className="edit-news-button"
                            >
                                Edytuj wpis{" "}
                            </Button>
                        }
                    />
                </div>

                <NewsEditForm idParam={this.props.match.params._id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsEditor);
