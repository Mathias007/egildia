import React from "react";
import { Link } from "react-router-dom";

import { Button, Divider, Form } from "antd";
import styles from "../../styles/styles";
const { Item } = Form;

export default function ButtonComponent(props) {
    const {
        composition,
        cancelLink,
        cancelText,
        icon,
        onClick,
        type,
        htmlType,
        text
    } = props;

    if (composition === "double")
        return (
            <Item className="btn-wrap">
                <Button
                    icon={icon}
                    type={type}
                    htmlType={htmlType}
                    onClick={onClick}
                >
                    {text}
                </Button>
                <Divider
                    type={styles.hiddenDivider.type}
                    dashed
                    style={styles.hiddenDivider}
                />
                <Button>
                    <Link to={cancelLink}>{cancelText}</Link>
                </Button>
            </Item>
        );
    else if (composition === "nowrap")
        return (
            <Button
                icon={icon}
                type={type}
                htmlType={htmlType}
                onClick={onClick}
            >
                {text}
            </Button>
        );
    else
        return (
            <Item className="btn-wrap">
                <Button icon={icon} type={type} htmlType={htmlType}>
                    {text}
                </Button>
            </Item>
        );
}
