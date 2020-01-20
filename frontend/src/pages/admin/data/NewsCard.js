import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";

import { news } from "../../../_store/_actions";
import {dateFormat} from "../../../_config/globalContentVariables"
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import { generateOptions } from "./AdminDataGenerators";

import { Avatar, Card, Divider, Icon } from "antd";
const { Meta } = Card;

const { GENERAL, NEWS } = linksPaths;

class NewsCard extends Component {
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
            <Card
                type="inner"
                style={styles.card}
                title={
                    <>
                        <Link to={GENERAL.INDEX}>
                            <Icon type="arrow-left" /> Powrót
                        </Link>
                        <Divider type="vertical" />
                        <span>{title}</span>
                    </>
                }
                extra={
                    this.props.isAuthenticated ? (
                        <div>
                            <strong>Opcje</strong>
                            {generateOptions(NEWS.EDIT, NEWS.REMOVE, _id)}
                        </div>
                    ) : null
                }
                actions={[
                    <span>
                        <Icon type="idcard" /> Komentarze: <strong>brak</strong>
                    </span>
                ]}
            >
                <Meta
                    avatar={
                        <Avatar style={styles.newsAvatar} size="large">
                            {category}
                        </Avatar>
                    }
                    description={
                        <>
                            <span>Dodano: {moment(date).format(dateFormat)}</span>
                            <Divider type="vertical" />
                            <span>
                                Autor: <strong>{author}</strong>
                            </span>
                        </>
                    }
                />
                <p>{content} </p>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
