import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/styles";

import { Button, Layout, Result } from "antd";
const { Content } = Layout;

export default function Success(props) {
    const { cancelLink, continueFunction, message, oneButton } = props;
    return (
        <Content style={styles.content}>
            <Result
                status="success"
                title={message}
                subTitle={
                    oneButton
                        ? "Możesz kontynuować swoją pracę"
                        : "Czy chcesz kontynuować pracę?"
                }
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
