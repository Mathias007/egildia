import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { news } from "../../../_store/_actions";

import { Button, Form, Layout } from "antd";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

const { Item } = Form;
const { Content } = Layout;

class RemoveSelectedNews extends Component {
    state = {
        id: this.props.match.params._id,
        title: this.props.title,
        errorMessage: ""
    };

    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedNews(this.props.match.params._id);
    };

    render() {
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent />
                <Content
                    style={{
                        background: "#fff",
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    Czy na pewno chcesz usunąć wpis o numerze{" "}
                    {this.props.match.params._id}? Tej operacji nie będzie można
                    cofnąć.
                    <Item>
                        <Button
                            icon="file-edit"
                            type="primary"
                            htmlType="submit"
                            className="edit-article-button"
                            onClick={this.handleDeletingSubmit}
                        >
                            Usuń artykuł
                        </Button>
                        <Button>Wstecz</Button>
                    </Item>
                    <Item>{this.props.errorMessage}</Item>
                </Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.news.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteSelectedNews: id => {
            return dispatch(news.deleteSelectedNews(id));
        }
    };
};

RemoveSelectedNews = connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoveSelectedNews);

export default Form.create()(RemoveSelectedNews);
