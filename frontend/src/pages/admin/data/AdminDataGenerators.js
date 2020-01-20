import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { dateFormat } from "../../../_config/globalContentVariables";
import styles from "../../../styles/styles";

import { Avatar, Divider, Icon } from "antd";

export const generateAvatar = name => {
    return (
        <Avatar style={styles.userAvatar} size="large">
            {name.charAt(0).toUpperCase()}
        </Avatar>
    );
};

export const generateOptions = (editPath, removePath, id) => {
    return (
        <>
            <Divider type="vertical" />
            <Link to={`${editPath}/${id}`}>
                <Icon type="edit" />
            </Link>
            <Divider type="vertical" />
            <Link to={`${removePath}/${id}`}>
                <Icon type="delete" />
            </Link>
        </>
    );
};

export const generateDate = date => moment(date).format(dateFormat);
