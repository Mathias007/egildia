import React from "react";

import { Button, Form } from "antd";
const { Item } = Form;

export default function ButtonComponent(props) {
    const { icon, type, htmlType, text } = props;
    return (
        <Item className="btn-wrap">
            <Button icon={icon} type={type} htmlType={htmlType}>
                {text}
            </Button>
        </Item>
    );
}
