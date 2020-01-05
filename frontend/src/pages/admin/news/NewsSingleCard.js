import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import moment from "moment";
import "moment/locale/pl";

import { news } from "../../../_store/_actions";

import { Avatar, Card, Divider, Icon, Layout } from "antd";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
const { Meta } = Card;
// const { Content } = Layout;

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
                <BreadcrumbComponent />
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
                        description={`Data dodania: ${moment(date).format(
                            "LLLL"
                        )} | Autor: ${author}`}
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
