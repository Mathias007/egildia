import React, { Component } from "react";

import { Avatar, Form, Button, List, Input, Layout } from "antd";
import { Comment } from "@ant-design/compatible";

import moment from "moment";
import styles from "../../../styles/styles";

const { TextArea } = Input;
const { Content } = Layout;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${
            comments.length > 1 ? "replies" : "reply"
        }`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button
                htmlType="submit"
                loading={submitting}
                onClick={onSubmit}
                type="primary"
            >
                Add Comment
            </Button>
        </Form.Item>
    </div>
);

class Comments extends Component {
    state = {
        comments: [],
        submitting: false,
        value: ""
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: "",
                comments: [
                    {
                        author: "Han Solo",
                        avatar:
                            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow()
                    },
                    ...this.state.comments
                ]
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <Layout style={styles.layout}>
                <Content style={styles.content}>
                    {comments.length > 0 && <CommentList comments={comments} />}
                    <Comment
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <Editor
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                submitting={submitting}
                                value={value}
                            />
                        }
                    />
                </Content>
            </Layout>
        );
    }
}

export default Comments;
