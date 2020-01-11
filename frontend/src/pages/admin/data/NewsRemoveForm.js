import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { news } from "../../../_store/_actions";

import { Button, Divider, Form, Layout } from "antd";
const { Item } = Form;
const { Content } = Layout;

class NewsRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedNews(this.props.idParam);
    };

    render() {
        return (
            <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                }}
            >
                <Item className="btn-wrap">
                    <Button
                        icon="delete"
                        type="primary"
                        htmlType="submit"
                        className="remove-article-button"
                        onClick={this.handleDeletingSubmit}
                    >
                        Usuń wpis
                    </Button>
                    <Divider type="vertical" dashed style={{ border: 0 }} />
                    <Button>
                        <Link to="/admin/news">Zrezygnuj</Link>
                    </Button>
                </Item>
                <Item>{this.props.errorMessage}</Item>
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
