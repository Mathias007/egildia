import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import serverStatuses from "../../_config/serverStatuses";
import styles from "../../styles/styles";

import { Button, Layout, Result } from "antd";
const { Content } = Layout;

const { STATUS_FORBIDDEN } = serverStatuses;

export default class Forbidden extends Component {
    state = {
        redirect: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                redirect: true
            });
        }, 5000);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        } else
            return (
                <Content style={styles.content}>
                    <Result
                        status={`${STATUS_FORBIDDEN}`}
                        title="Błąd 403 - Nie masz dostępu do tej części serwisu."
                        subTitle=" Po upływie 5 sekund zostaniesz przekierowany na stronę główną. Kliknij poniżej, jeśli nie chcesz czekać."
                        extra={
                            <Button type="primary">
                                <Link to="/">Powrót</Link>
                            </Button>
                        }
                    />
                </Content>
            );
    }
}
