import React from "react";
import { Link } from "react-router-dom";

import serverStatuses from "../../_config/serverStatuses";
import styles from "../../styles/styles";

import { Button, Layout, Result } from "antd";
const { Content } = Layout;

const { SUCCESS_STRING } = serverStatuses;

export default function Success(props) {
    const {
        cancelLink,
        continueFunction,
        description,
        message,
        oneButton
    } = props;
    return (
        <Content style={styles.content}>
            <Result
                status={SUCCESS_STRING}
                title={message}
                subTitle={description}
                extra={
                    oneButton ? (
                        <Button key="cancel" onClick={continueFunction}>
                            <Link to={cancelLink}>Zakończ</Link>
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
