import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../../../_store/_actions";

import ButtonComponent from "../../components/ButtonComponent";
import ErrorMessageComponent from "../../components/ErrorMessageComponent";

import { Layout } from "antd";
import styles from "../../../styles/styles";

const { Content } = Layout;

class NewsRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedNews(this.props.idParam);
    };

    render() {
        const { properNews } = this.props;
        return (
            <Content style={styles.content}>
                <p>
                    Czy na pewno chcesz usunąć artykuł o tytule{" "}
                    <strong>{properNews.title}</strong>? Tej operacji nie będzie
                    można cofnąć.
                </p>

                <ButtonComponent
                    composition="double"
                    cancelLink="/admin/articles"
                    cancelText="Zrezygnuj"
                    htmlType="submit"
                    icon="delete"
                    onClick={this.handleDeletingSubmit}
                    text="Usuń wpis"
                    type="primary"
                />
                <ErrorMessageComponent errorMessage={this.props.errorMessage} />
            </Content>
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
        deleteSelectedNews: id => {
            return dispatch(news.deleteSelectedNews(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsRemoveForm);
