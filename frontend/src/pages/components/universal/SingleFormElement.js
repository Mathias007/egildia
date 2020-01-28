import React from "react";
import formElementsBuilder from "./_helpers/formElementsBuilder";

import { Form } from "antd";
const { Item } = Form;

export default function SingleFormElement(props) {
    const {
        label,
        fieldName,
        getFieldDecorator,
        hasFeedback,
        initialValue
    } = props;

    let itemStructure = formElementsBuilder(props);

    return (
        <Item label={label} hasFeedback={hasFeedback}>
            {getFieldDecorator(fieldName, {
                initialValue,
                rules: itemStructure.decoratorRules
            })(itemStructure.formElement)}
        </Item>
    );
}
