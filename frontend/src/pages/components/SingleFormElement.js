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
        initialValue,
        inputIcon,
        message,
        minLength,
        options,
        pattern,
        placeholder,
        required,
        rows,
        tooltip
    } = props;

    if (fieldType === "text-area")
        return (
            <Item label={label}>
                {getFieldDecorator(fieldName, {
                    initialValue,
                    rules: [
                        {
                            required,
                            message
                        }
                    ]
                })(<TextArea rows={rows} placeholder={placeholder} />)}
            </Item>
        );
    else if (fieldType === "date")
        return (
            <Item label={label}>
                {getFieldDecorator(fieldName, {
                    rules: [
                        {
                            type: "object",
                            required
                        }
                    ]
                })(
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
                )}
            </Item>
        );
    else if (fieldType === "password")
        return (
            <Item label={label}>
                {getFieldDecorator(fieldName, {
                    rules: [
                        {
                            required,
                            message
                        },
                        { min: minLength, message: "Hasło za krótkie!" },
                        {
                            pattern,
                            message: "Hasło nie spełnia wymagań!"
                        }
                    ]
                })(
                    <Password
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
                )}
            </Item>
        );
    else if (fieldType === "select") {
        return (
            <Item label={label}>
                {getFieldDecorator(fieldName, {
                    initialValue,
                    rules: [
                        {
                            required
                        }
                    ]
                })(
                    <Select>
                        {options.map((option, index) => {
                            return (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            );
                        })}
                    </Select>
                )}
            </Item>
        );
    } else
        return (
            <Item label={label}>
                {getFieldDecorator(fieldName, {
                    initialValue,
                    rules: [
                        {
                            type: fieldType,
                            required,
                            message
                        }
                    ]
                })(
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
                )}
            </Item>
        );
}
