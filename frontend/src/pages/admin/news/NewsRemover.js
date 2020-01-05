import React, { Component } from "react";
import { connect } from "react-redux";
import { news } from "../../../_store/_actions";

import { Button, Form, Layout } from "antd";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";

const { Item } = Form;
const { Content } = Layout;

class RemoveSelectedNews extends Component {
    state = {};

    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedNews(this.props.match.params._id);
    };

    render() {
        const { properNews } = this.props;
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
                    Czy na pewno chcesz usunąć wpis o tytule{" "}
                    <strong>{properNews.title}</strong>? Tej operacji nie będzie
                    można cofnąć.
                    <Item>
                        <Button
                            icon="file-edit"
                            type="primary"
                            htmlType="submit"
                            className="edit-article-button"
                            onClick={this.handleDeletingSubmit}
                        >
                            Usuń wpis
                        </Button>
                        <Button>
                            Zrezygnuj
                        </Button>
                    </Item>
                    <Item>{this.props.errorMessage}</Item>
                </Content>
            </Layout>
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
        showProperNews: id => {
            return dispatch(news.showProperNews(id));
        },
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
