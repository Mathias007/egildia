import React from "react";
import locale from "antd/es/date-picker/locale/pl_PL";

import styles from "../../../../styles/styles";

import Icon from "../IconComponent";

import { DatePicker, Input, Select, Tooltip } from "antd";
const { Password, TextArea } = Input;
const { Option } = Select;

export const createDatePicker = (props) => {
    const { inputIcon, placeholder } = props;
    return (
        <DatePicker
            locale={locale}
            style={styles.datePicker}
            suffixIcon={<Icon type={inputIcon} style={styles.inputIcon} />}
            showTime
            showToday
            format="LLLL"
            placeholder={placeholder}
        />
    );
};

export const createDefaultInput = (props) => {
    const { inputIcon, placeholder, tooltip } = props;
    return (
        <Input
            prefix={<Icon type={inputIcon} style={styles.inputIcon} />}
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
};

export const createPasswordInput = (props) => {
    const { inputIcon, onBlur, placeholder, tooltip } = props;
    return (
        <Password
            onBlur={onBlur}
            prefix={<Icon type={inputIcon} style={styles.inputIcon} />}
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
};

export const createSelect = (props) => {
    const { options } = props;
    return (
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
};

export const createTextArea = (props) => {
    const { placeholder, rows } = props;
    return <TextArea rows={rows} placeholder={placeholder} />;
};
