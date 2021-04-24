import React from "react";
import formElementsBuilder from "./_helpers/formElementsBuilder";

import { Form } from "antd";
const { Item } = Form;

export default function SingleFormElement(props) {
    const { label, fieldName, dependencies, hasFeedback, initialValue } = props;

    let itemStructure = formElementsBuilder(props);

    return (
        <Item
            label={label}
            hasFeedback={hasFeedback}
            name={fieldName}
            initialValue={initialValue}
            dependencies={dependencies}
            rules={itemStructure.decoratorRules}
        >
            {itemStructure.formElement}
        </Item>
    );
}
