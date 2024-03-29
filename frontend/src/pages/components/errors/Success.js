import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

import serverStatuses from "../../../_config/serverStatuses";
import styles from "../../../styles/styles";

import { Button, Layout, Result } from "antd";
const { Content } = Layout;

const { SUCCESS_STRING } = serverStatuses;

export default class Success extends Component {
    state = {
        redirect: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                redirect: true
            });
        }, 2000);
    }

    render() {
        const {
            cancelLink,
            continueFunction,
            description,
            message,
            oneButton,
            redirection
        } = this.props;

        if (redirection && this.state.redirect) {
            return <Navigate to={cancelLink} />;
        } else
            return (
                <Content style={styles.content}>
                    <Result
                        status={SUCCESS_STRING}
                        title={message}
                        subTitle={description}
                        extra={
                            oneButton ? (
                                <Button key="cancel" onClick={continueFunction}>
                                    <Link to={cancelLink}>Naprzód!</Link>
                                </Button>
                            ) : (
                                [
                                    <Button
                                        key="continue"
                                        type="primary"
                                        onClick={continueFunction}
                                    >
                                        Kontynuuj
                                    </Button>,
                                    <Button key="cancel">
                                        <Link to={cancelLink}>Zakończ</Link>
                                    </Button>
                                ]
                            )
                        }
                    />
                </Content>
            );
    }
}
