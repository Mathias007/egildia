import React, { Component } from "react";
import { connect } from "react-redux";

import navigationTitles from "../../../_config/navigationTitles";
import { news } from "../../../_store/_actions";

import BreadcrumbComponent from "../../global/BreadcrumbComponent";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import NewsEditForm from "../data/NewsEditForm";

import { Button, Layout } from "antd";

const { ADMIN_NEWS, EDITOR } = navigationTitles;

const buttonData = {
    icon: "edit",
    type: "primary",
    htmlType: "submit",
    form: "edit-news-form",
    text: "Edytuj wpis"
};

class NewsEditor extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
        this.props.showProperNews(this.props.match.params._id);
    }

    render() {
        const { icon, type, htmlType, form, text } = buttonData;
        return (
            <Layout style={{ padding: "0 24px 24px" }}>
                <BreadcrumbComponent
                    isAdminComponent
                    section={ADMIN_NEWS}
                    page={EDITOR}
                />
                <PageHeaderComponent
                    isAdminComponent
                    button={
                        <Button
                            icon={icon}
                            type={type}
                            htmlType={htmlType}
                            form={form}
                        >
                            {text}
                        </Button>
                    }
                />
                <NewsEditForm idParam={this.props.match.params._id} />
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        showProperNews: id => {
            return dispatch(news.showProperNews(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsEditor);
