import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { articles } from "../../../_store/_actions";

import { Button, Divider, Form, Layout } from "antd";

const { Item } = Form;
const { Content } = Layout;

class ArticlesRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedArticle(this.props.idParam);
    };

    render() {
        const { properArticle } = this.props;

        return (
            <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                }}
            >
                <p>
                    Czy na pewno chcesz usunąć wpis o tytule{" "}
                    <strong>{properArticle.title}</strong>? Tej operacji nie
                    będzie można cofnąć.
                </p>
                <Item className="btn-wrap">
                    <Button
                        icon="delete"
                        type="primary"
                        htmlType="submit"
                        className="remove-article-button"
                        onClick={this.handleDeletingSubmit}
                    >
                        Usuń artykuł
                    </Button>
                    <Divider type="vertical" dashed style={{ border: 0 }} />
                    <Button>
                        <Link to="/admin/articles">Zrezygnuj</Link>
                    </Button>
                </Item>
                <Item>{this.props.errorMessage}</Item>
            </Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.articles.errorMessage,
        properArticle: state.articles.properArticle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteSelectedArticle: id => {
            return dispatch(articles.deleteSelectedArticle(id));
        }
    };
};

ArticlesRemoveForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticlesRemoveForm);

export default Form.create()(ArticlesRemoveForm);
