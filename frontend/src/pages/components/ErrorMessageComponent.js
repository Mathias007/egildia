import React from "react";

import { Form } from "antd";
const { Item } = Form;

export default function ErrorMessageComponent(props) {
    const { errorMessage } = props;
    return <Item>{errorMessage}</Item>;
}
