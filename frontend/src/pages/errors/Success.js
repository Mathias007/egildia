import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/styles";

import { Button, Layout, Result } from "antd";
const { Content } = Layout;

export default function Success(props) {
    return (
        <Content style={styles.content}>
            <Result
                status="success"
                title={props.message}
                subTitle="Czy chcesz kontynuować pracę?"
                extra={[
                    <Button
                        key="continue"
                        type="primary"
                        onClick={props.continueFunction}
                    >
                        Kontynuuj
                    </Button>,

                    <Button key="cancel">
                        <Link to={props.cancelLink}>Zakończ</Link>
                    </Button>
                ]}
            />
        </Content>
    );
}
