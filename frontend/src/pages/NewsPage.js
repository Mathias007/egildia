import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/pl";

import navigationTitles from "../_config/navigationTitles";
import { news } from "../_store/_actions";

import BreadcrumbComponent from "./global/BreadcrumbComponent";

import { Avatar, Button, Card, Divider, Icon, Layout } from "antd";
import styles from "../styles/styles";

const { Meta } = Card;
const { Content } = Layout;

const { GENERAL_INDEX } = navigationTitles;

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
                            this.props.isAuthenticated ? (
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
                            ) : null
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
                            description={
                                <>
                                    <span>
                                        Dodano: {moment(date).format("LLLL")}
                                    </span>
                                    <Divider type="vertical" />
                                    <span>
                                        Autor: <strong>{author}</strong>
                                    </span>
                                </>
                            }
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
            <Layout style={styles.layout}>
                <BreadcrumbComponent page={GENERAL_INDEX} />
                <Content style={styles.content}>
                    <Card
                        title="Aktualności"
                        extra={
                            this.props.isAuthenticated ? (
                                <Button
                                    icon="file-add"
                                    type="primary"
                                    className="add-news-button"
                                >
                                    <Link to="admin/news/add">Dodaj wpis</Link>
                                </Button>
                            ) : null
                        }
                    >
                        {this.renderNews()}
                    </Card>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news,
        isAuthenticated: state.auth.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showNewsList: () => dispatch(news.showNewsList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
