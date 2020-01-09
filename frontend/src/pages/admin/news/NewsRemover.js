import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import { Button, Divider, Form, Layout, PageHeader } from "antd";
const { Item } = Form;
const { Content } = Layout;

const { ADMIN_NEWS, REMOVER } = navigationTitles;

class NewsRemover extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedNews(this.props.match.params._id);
    };

    render() {
        const { properNews } = this.props;

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminContent
                    section={ADMIN_NEWS}
                    page={REMOVER}
                />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    <div>
                        <PageHeader
                            onBack={() => window.history.back()}
                            title="Powrót"
                            subTitle="Panel administracyjny"
                        />
                    </div>
                    <p>
                        Czy na pewno chcesz usunąć wpis o tytule{" "}
                        <strong>{properNews.title}</strong>? Tej operacji nie
                        będzie można cofnąć.
                    </p>
                    <Item className="btn-wrap">
                        <Button
                            icon="delete"
                            type="primary"
                            htmlType="submit"
                            className="remove-article-button"
                            onClick={this.handleDeletingSubmit}
                        >
                            Usuń wpis
                        </Button>
                        <Divider type="vertical" dashed style={{ border: 0 }} />
                        <Button>
                            <Link to="/admin/news">Zrezygnuj</Link>
                        </Button>
                    </Item>
                    <Item>{this.props.errorMessage}</Item>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.news.errorMessage,
        properNews: state.news.properNews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showProperNews: id => {
            return dispatch(news.showProperNews(id));
        },
        deleteSelectedNews: id => {
            return dispatch(news.deleteSelectedNews(id));
        }
    };
};

NewsRemover = connect(mapStateToProps, mapDispatchToProps)(NewsRemover);

export default Form.create()(NewsRemover);
