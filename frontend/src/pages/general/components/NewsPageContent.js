import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { news } from "../../../_store/_actions";
import linksPaths from "../../../_config/linksPaths";
import styles from "../../../styles/styles";

import {
    generateAvatar,
    generateCardFooterLink,
    generateComments,
    generateContentPreview,
    generateMetaDescription,
    generateOptions
} from "../../admin/components/_helpers/adminDataGenerators";
import ButtonComponent from "../../components/universal/ButtonComponent";

import { Card, Layout } from "antd";
const { Meta } = Card;
const { Content } = Layout;

const { NEWS } = linksPaths;

const captions = {
    added: "Dodano:",
    author: "Autor:",
    backText: "Powrót",
    comments: "Komentarze:",
    commentsCount: "brak",
    goToNews: "Przejdź do wpisu",
    options: "Opcje",
    readMore: "... Czytaj dalej"
};

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
                            generateComments(
                                captions.comments,
                                captions.commentsCount
                            ),
                            generateCardFooterLink(
                                captions.goToNews,
                                NEWS.SINGLE,
                                _id
                            )
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

                        {generateContentPreview(
                            content,
                            400,
                            captions.readMore,
                            NEWS.SINGLE,
                            _id
                        )}
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
