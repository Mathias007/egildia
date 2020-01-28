import React, { Component } from "react";
import { connect } from "react-redux";

import { news } from "../../../../_store/_actions";
import linksPaths from "../../../../_config/linksPaths";
import serverStatuses from "../../../../_config/serverStatuses";
import styles from "../../../../styles/styles";

import ButtonComponent from "../../../components/universal/ButtonComponent";
import ErrorMessageComponent from "../../../components/universal/ErrorMessageComponent";
import Success from "../../../components/errors/Success";

import { Layout } from "antd";
const { Content } = Layout;

const { NEWS } = linksPaths;
const { STATUS_OK } = serverStatuses;

class NewsRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedNews(this.props.idParam);
    };

    render() {
        if (this.props.status === STATUS_OK)
            return (
                <Success
                    oneButton
                    message={this.props.errorMessage}
                    continueFunction={this.props.cleanServerStatus}
                    cancelLink={NEWS.MAIN}
                    description="Możesz wrócić do listy artykułów"
                />
            );
        else {
            const { properNews } = this.props;
            return (
                <Content style={styles.content}>
                    <p>
                        Czy na pewno chcesz usunąć artykuł o tytule{" "}
                        <strong>{properNews.title}</strong>? Tej operacji nie
                        będzie można cofnąć.
                    </p>

                    <ButtonComponent
                        composition="double"
                        cancelLink={NEWS.MAIN}
                        cancelText="Zrezygnuj"
                        htmlType="submit"
                        icon="delete"
                        onClick={this.handleDeletingSubmit}
                        text="Usuń wpis"
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

const mapStateToProps = state => {
    return {
        errorMessage: state.news.errorMessage,
        properNews: state.news.properNews,
        status: state.news.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteSelectedNews: id => {
            return dispatch(news.deleteSelectedNews(id));
        },
        cleanServerStatus: () => {
            return dispatch(news.cleanServerStatus());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsRemoveForm);
