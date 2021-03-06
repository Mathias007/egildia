import React, { Component } from "react";
import { connect } from "react-redux";

import { articles } from "../../../../_store/_actions";
import linksPaths from "../../../../_config/linksPaths";
import serverStatuses from "../../../../_config/serverStatuses";
import styles from "../../../../styles/styles";

import ButtonComponent from "../../../components/universal/ButtonComponent";
import ErrorMessageComponent from "../../../components/universal/ErrorMessageComponent";
import Success from "../../../components/errors/Success";

import { Layout } from "antd";
const { Content } = Layout;

const { ARTICLES } = linksPaths;
const { STATUS_OK } = serverStatuses;

class ArticlesRemoveForm extends Component {
    handleDeletingSubmit = (e) => {
        e.preventDefault();
        this.props.deleteSelectedArticle(this.props.idParam);
    };

    render() {
        if (this.props.status === STATUS_OK)
            return (
                <Success
                    oneButton
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={ARTICLES.MAIN}
                    description="Możesz wrócić do listy artykułów"
                />
            );
        else {
            const { properArticle } = this.props;
            return (
                <Content style={styles.content}>
                    <p>
                        Czy na pewno chcesz usunąć artykuł o tytule{" "}
                        <strong>{properArticle.title}</strong>? Tej operacji nie
                        będzie można cofnąć.
                    </p>
                    <ButtonComponent
                        composition="double"
                        cancelLink={ARTICLES.MAIN}
                        cancelText="Zrezygnuj"
                        htmlType="submit"
                        icon="delete"
                        onClick={this.handleDeletingSubmit}
                        text="Usuń artykuł"
                        type="primary"
                    />
                    <ErrorMessageComponent
                        status={this.props.status}
                        errorMessage={this.props.errorMessage}
                    />
                </Content>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.articles.errorMessage,
        properArticle: state.articles.properArticle,
        status: state.articles.status,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSelectedArticle: (id) => {
            return dispatch(articles.deleteSelectedArticle(id));
        },
        cleanServerStatus: () => {
            return dispatch(articles.cleanServerStatus());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesRemoveForm);
