import React from "react";
import { Link } from "react-router-dom";

import styles from "../../../../styles/styles";

import { Button, Divider, Form } from "antd";
const { Item } = Form;

export const createSingleWrappedButton = props => {
    const { form, htmlType, icon, onClick, type, text } = props;
    return (
        <Item className="btn-wrap">
            <Button
                form={form}
                icon={icon}
                htmlType={htmlType}
                onClick={onClick}
                type={type}
            >
                {text}
            </Button>
        </Item>
    );
};

export const createSingleNonWrappedButton = props => {
    const { form, htmlType, icon, onClick, type, text } = props;

    return (
        <Button
            form={form}
            htmlType={htmlType}
            icon={icon}
            onClick={onClick}
            type={type}
        >
            {text}
        </Button>
    );
};

export const createDoubleButton = props => {
    const {
        cancelClick,
        cancelLink,
        cancelText,
        form,
        htmlType,
        icon,
        onClick,
        type,
        text
    } = props;

    return (
        <Item className="btn-wrap">
            <Button
                form={form}
                htmlType={htmlType}
                onClick={onClick}
                icon={icon}
                type={type}
            >
                {text}
            </Button>
            <Divider
                type={styles.hiddenDivider.type}
                dashed
                style={styles.hiddenDivider}
            />
            <Button onClick={cancelClick}>
                <Link to={cancelLink}>{cancelText}</Link>
            </Button>
        </Item>
    );
};
