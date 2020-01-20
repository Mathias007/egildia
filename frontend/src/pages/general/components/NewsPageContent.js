import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/pl";

import { news } from "../../../_store/_actions";
import { dateFormat } from "../../../_config/globalContentVariables";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import { generateOptions } from "../../admin/data/AdminDataGenerators";
import ButtonComponent from "../../components/ButtonComponent";

import { Avatar, Card, Divider, Icon, Layout } from "antd";
const { Meta } = Card;
const { Content } = Layout;

const { NEWS } = linksPaths;

class NewsPageContent extends Component {
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
                        style={styles.card}
                        title={title}
                        extra={
                            this.props.isAuthenticated ? (
                                <div key={_id}>
                                    <strong>Opcje</strong>
                                    {generateOptions(
                                        NEWS.EDIT,
                                        NEWS.REMOVE,
                                        _id
                                    )}
                                </div>
                            ) : null
                        }
                        actions={[
                            <span>
                                <Icon type="idcard" /> Komentarze:{" "}
                                <strong>brak</strong>
                            </span>,
                            <Link to={`${NEWS.SINGLE}/${_id}`}>
                                <Icon type="arrow-right" /> Przejdź do wpisu
                            </Link>
                        ]}
                    >
                        <Meta
                            avatar={
                                <Avatar style={styles.newsAvatar} size="large">
                                    {category.charAt(0).toUpperCase()}
                                </Avatar>
                            }
                            description={
                                <>
                                    <span>
                                        Dodano:{" "}
                                        {moment(date).format(dateFormat)}
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
            <Content style={styles.content}>
                <Card
                    title="Aktualności"
                    extra={
                        this.props.isAuthenticated ? (
                            <Link to={NEWS.ADD}>
                                <ButtonComponent
                                    composition="nowrap"
                                    icon="file-add"
                                    text="Dodaj wpis"
                                    type="primary"
                                />
                            </Link>
                        ) : null
                    }
                >
                    {this.renderNews()}
                </Card>
            </Content>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageContent);
