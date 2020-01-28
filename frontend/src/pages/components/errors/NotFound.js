import React from "react";
import { Link } from "react-router-dom";

import serverStatuses from "../../_config/serverStatuses";
import styles from "../../styles/styles";

import { Button, Layout, Result } from "antd";
const { Content } = Layout;

const { STATUS_NOT_FOUND } = serverStatuses;

export default function NotFound(props) {
    return (
        <Content style={styles.content}>
            <Result
                status={`${STATUS_NOT_FOUND}`}
                title="404 - nie znaleziono strony"
                subTitle="Przepraszamy, strona lub materiał o podanym adresie nie istnieje."
                extra={
                    <Button type="primary">
                        <Link to="/">Uciekaj!</Link>
                    </Button>
                }
            />
        </Content>
    );
}
