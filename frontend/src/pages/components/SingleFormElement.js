import React from "react";
import locale from "antd/es/date-picker/locale/pl_PL";

import styles from "../../styles/styles";
import { DatePicker, Form, Icon, Select, Input, Tooltip } from "antd";

const { Item } = Form;
const { TextArea, Password } = Input;
const { Option } = Select;

export default function SingleFormElement(props) {
    const {
        label,
        fieldName,
        fieldType,
        getFieldDecorator,
        hasFeedback,
        initialValue,
        inputIcon,
        message,
        minLength,
        onBlur,
        options,
        pattern,
        placeholder,
        required,
        rows,
        tooltip,
        validator
    } = props;

    let decoratorRules;
    let formElement;

    const getFormElement = () => {
        switch (fieldType) {
            case "date":
                decoratorRules = [
                    {
                        type: "object",
                        required
                    }
                ];

                formElement = (
                    <DatePicker
                        locale={locale}
                        style={styles.datePicker}
                        suffixIcon={
                            <Icon type={inputIcon} style={styles.inputIcon} />
                        }
                        showTime
                        showToday
                        format="LLLL"
                        placeholder={placeholder}
                    />
                );

                return decoratorRules, formElement;

            case "password":
                decoratorRules = [
                    {
                        required,
                        message
                    },
                    { min: minLength, message: "Hasło za krótkie!" },
                    {
                        pattern,
                        message: "Hasło nie spełnia wymagań!"
                    },
                    { validator }
                ];

                formElement = (
                    <Password
                        onBlur={onBlur}
                        prefix={
                            <Icon type={inputIcon} style={styles.inputIcon} />
                        }
                        suffix={
                            <Tooltip title={tooltip}>
                                <Icon
                                    type={styles.tooltipIcon.type}
                                    style={styles.tooltipIcon}
                                />
                            </Tooltip>
                        }
                        placeholder={placeholder}
                    />
                );
                return decoratorRules, formElement;

            case "select":
                decoratorRules = [
                    {
                        required
                    }
                ];

                formElement = (
                    <Select>
                        {options.map((option, index) => {
                            return (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            );
                        })}
                    </Select>
                );

                return decoratorRules, formElement;

            case "text-area":
                decoratorRules = [
                    {
                        required,
                        message
                    }
                ];

                formElement = (
                    <TextArea rows={rows} placeholder={placeholder} />
                );

                return decoratorRules, formElement;

            default:
                decoratorRules = [
                    {
                        type: fieldType,
                        required,
                        message
                    }
                ];

                formElement = (
                    <Input
                        prefix={
                            <Icon type={inputIcon} style={styles.inputIcon} />
                        }
                        suffix={
                            <Tooltip title={tooltip}>
                                <Icon
                                    type={styles.tooltipIcon.type}
                                    style={styles.tooltipIcon}
                                />
                            </Tooltip>
                        }
                        placeholder={placeholder}
                    />
                );

                return decoratorRules, formElement;
        }
    };

    getFormElement();

    return (
        <Item label={label} hasFeedback={hasFeedback}>
            {getFieldDecorator(fieldName, {
                initialValue,
                rules: decoratorRules
            })(formElement)}
        </Item>
    );
}
