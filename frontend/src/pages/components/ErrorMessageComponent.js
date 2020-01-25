import React from "react";

import serverStatuses from "../../_config/serverStatuses";

import { Form, Icon } from "antd";
const { Item } = Form;

const {
    STATUS_OK,
    STATUS_CONFLICT,
    STATUS_CREATED,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

export default function ErrorMessageComponent(props) {
    const { errorMessage, status } = props;

    switch (status) {
        case STATUS_OK || STATUS_CREATED:
            return (
                <Item
                    style={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "#08c"
                    }}
                >
                    <Icon type="smile" theme="twoTone" /> {errorMessage}
                </Item>
            );

        case STATUS_UNAUTHORIZED || STATUS_FORBIDDEN || STATUS_CONFLICT:
            return (
                <Item
                    style={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "orange"
                    }}
                >
                    <Icon
                        type="warning"
                        theme="twoTone"
                        twoToneColor="orange"
                    />{" "}
                    {errorMessage}
                </Item>
            );

        case INTERNAL_ERROR:
            return (
                <Item
                    style={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "red"
                    }}
                >
                    <Icon
                        type="exclamation-circle"
                        theme="twoTone"
                        twoToneColor="red"
                    />{" "}
                    {errorMessage}
                </Item>
            );

        default:
            return <Item>{errorMessage}</Item>;
    }
}
