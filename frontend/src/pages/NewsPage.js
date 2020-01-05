import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import moment from "moment";
import "moment/locale/pl";

import { news } from "../_store/_actions";

import BreadcrumbComponent from "./global/BreadcrumbComponent";

import { Avatar, Card, Divider, Icon, Layout } from "antd";
const { Meta } = Card;
const { Content } = Layout;

class NewsPage extends Component {
    componentDidMount() {
        this.props.showNewsList();
    }

    renderNews() {
        let { news } = this.props;

        if (news) {
            return news.map((singleNews, index) => {
                const {
                    _id,
                    category,
                    title,
                    content,
                    author,
                    date
                } = singleNews;
                return (
                    <Card
                        key={_id}
                        type="inner"
                        style={{ marginBottom: 16 }}
                        title={title}
                        extra={
                            <div key={_id}>
                                <strong>Opcje</strong>
                                <Divider type="vertical" />
                                <Link
                                    key={`edit-${_id}`}
                                    to={`admin/news/edit/${_id}`}
                                >
                                    <Icon type="edit" />
                                </Link>
                                <Divider type="vertical" />
                                <Link
                                    key={`remove-${_id}`}
                                    to={`admin/news/remove/${_id}`}
                                >
                                    <Icon type="delete" />
                                </Link>
                            </div>
                        }
                        actions={[
                            <span>
                                <Icon type="idcard" /> Komentarze:{" "}
                                <strong>brak</strong>
                            </span>,
                            <Link to={`news/${_id}`}>
                                <Icon type="arrow-right" /> Przejdź do wpisu
                            </Link>
                        ]}
                    >
                        <Meta
                            avatar={
                                <Avatar
                                    style={{
                                        backgroundColor: "#1890ff",
                                        verticalAlign: "middle"
                                    }}
                                    size="large"
                                >
                                    {category.charAt(0).toUpperCase()}
                                </Avatar>
                            }
                            description={`Data dodania: ${moment(date).format(
                                "LLLL"
                            )} | Autor: ${author}`}
                        />
                        <p>
                            {content}{" "}
                            {content.length > 100 ? <span>...</span> : null}
                        </p>
                    </Card>
                );
            });
        }
    }

    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    <Card title="Aktualności">{this.renderNews()}</Card>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showNewsList: () => dispatch(news.showNewsList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
