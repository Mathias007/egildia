import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/pl";

import navigationTitles from "../../../_config/navigationTitles";

import { news } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

import { Avatar, Card, Divider, Icon, Layout } from "antd";

const { Meta } = Card;

const { ADMIN_NEWS } = navigationTitles;

class NewsSingleCard extends Component {
    state = {};

    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    render() {
        const {
            _id,
            title,
            category,
            content,
            date,
            author
        } = this.props.properNews;

        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent section={ADMIN_NEWS} page={title} />
                <Card
                    type="inner"
                    style={{ marginBottom: 16 }}
                    title={
                        <>
                            <Link to={"/"}>
                                <Icon type="arrow-left" /> Powrót
                            </Link>
                            <Divider type="vertical" />
                            <span>{title}</span>
                        </>
                    }
                    extra={
                        <div>
                            <strong>Opcje</strong>
                            <Divider type="vertical" />
                            <Link to={`admin/news/edit/${_id}`}>
                                <Icon type="edit" />
                            </Link>
                            <Divider type="vertical" />
                            <Link to={`admin/news/remove/${_id}`}>
                                <Icon type="delete" />
                            </Link>
                        </div>
                    }
                    actions={[
                        <span>
                            <Icon type="idcard" /> Komentarze:{" "}
                            <strong>brak</strong>
                        </span>
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
                                {category}
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
                    <p>{content} </p>
                </Card>
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSingleCard);
