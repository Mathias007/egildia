import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import { news } from "../_store/_actions";

import { Avatar, Card, Icon } from "antd";
const { Meta } = Card;

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
                        title={title}
                        extra={
                            <>
                                Opcje:
                                <Link
                                    to={`admin/news/edit/${_id}`}
                                    // component={EditNewsComponent}
                                >
                                    {/* this.props.match.params._id */}
                                    <Icon type="edit" />
                                </Link>
                                |
                                <Link
                                    to={`admin/news/delete/${_id}`}
                                    // component={DeleteNewsComponent}
                                >
                                    {/* this.props.match.params._id */}
                                    <Icon type="delete" />
                                </Link>
                            </>
                        }
                        actions={content.length > 100 ? [<p>[dalej]</p>] : null}
                    >
                        <Meta
                            avatar={
                                <Avatar
                                    style={{
                                        backgroundColor: "violet",
                                        verticalAlign: "middle"
                                    }}
                                    size="large"
                                >
                                    {category.charAt(0) + category.charAt(1)}
                                </Avatar>
                            }
                            description={`Data dodania: ${moment(date).format(
                                "LLLL"
                            )} | Autor: ${author}`}
                        />
                        <p>{content}</p>
                    </Card>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <Card title="Aktualności">
                    {/* <p
                        style={{
                            fontSize: 14,
                            color: "rgba(0, 0, 0, 0.85)",
                            marginBottom: 16,
                            fontWeight: 500
                        }}
                    >
                        Group title
                    </p> */}
                    {this.renderNews()}
                </Card>
            </div>
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
