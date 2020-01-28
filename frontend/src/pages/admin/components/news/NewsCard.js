import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../../../_store/_actions";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import {
    generateOptions,
    generateComments,
    generateAvatar,
    generateMetaDescription,
    generateNewsCardTitle
} from "./AdminDataGenerators";

import { Card } from "antd";
const { Meta } = Card;

const { GENERAL, NEWS } = linksPaths;

const captions = {
    added: "Dodano:",
    author: "Autor:",
    backText: "Powrót",
    comments: "Komentarze:",
    commentsCount: "brak",
    options: "Opcje"
};

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
                title={generateNewsCardTitle(
                    GENERAL.INDEX,
                    captions.backText,
                    title
                )}
                extra={
                    this.props.isAuthenticated ? (
                        <div>
                            {generateOptions(
                                NEWS.EDIT,
                                NEWS.REMOVE,
                                _id,
                                captions.options
                            )}
                        </div>
                    ) : null
                }
                actions={[
                    generateComments(captions.comments, captions.commentsCount)
                ]}
            >
                <Meta
                    avatar={generateAvatar(category)}
                    description={generateMetaDescription(
                        date,
                        captions.added,
                        author,
                        captions.author
                    )}
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
