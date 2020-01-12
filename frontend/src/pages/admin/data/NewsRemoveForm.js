import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { news } from "../../../_store/_actions";

import { Button, Divider, Form, Layout } from "antd";
import styles from "../../../styles/styles";

const { Item } = Form;
const { Content } = Layout;

const buttonData = {
    icon: "delete",
    type: "primary",
    htmlType: "submit",
    text: "Usuń wpis"
};

class NewsRemoveForm extends Component {
    handleDeletingSubmit = e => {
        e.preventDefault();
        this.props.deleteSelectedNews(this.props.idParam);
    };

    render() {
        const { icon, type, htmlType, text } = buttonData;
        return (
            <Content style={styles.content}>
                <Item className="btn-wrap">
                    <Button icon={icon} type={type} htmlType={htmlType}>
                        {text}
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
