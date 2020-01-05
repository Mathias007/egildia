import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import { news } from "../_store/_actions";

import { Avatar, Card, Divider, Icon } from "antd";
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
                            <p>
                                Komentarze: <strong>brak</strong>
                            </p>,
                            <p>[przejdź do wpisu]</p>
                        ]}
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
            <div>
                <Card title="Aktualności">
                    <p
                        style={{
                            fontSize: 14,
                            color: "rgba(0, 0, 0, 0.85)",
                            marginBottom: 16,
                            fontWeight: 500
                        }}
                    >
                        Group title
                    </p>
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
