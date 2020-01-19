import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import styles from "../../../styles/styles";
import { Avatar, Divider, Icon } from "antd";

const generateAvatar = name => {
    return (
        <Avatar style={styles.userAvatar} size="large">
            {name.charAt(0).toUpperCase()}
        </Avatar>
    );
};

const generateDate = date => moment(date).format("LLLL");

const generateOptions = id => {
    return (
        <>
            <Divider type="vertical" />
            <Link to={`users/edit/${id}`}>
                <Icon type="edit" />
            </Link>
            <Divider type="vertical" />
            <Link to={`users/remove/${id}`}>
                <Icon type="delete" />
            </Link>
        </>
    );
};

export const usersColumnsStructure = [
    {
        title: "LP",
        dataIndex: "number",
        align: "center"
    },
    {
        title: "Avatar",
        dataIndex: "avatar",
        align: "center",
        render: name => generateAvatar(name)
    },
    {
        title: "Nazwa użytkownika",
        dataIndex: "username",
        align: "center"
    },
    {
        title: "Adres e-mail",
        dataIndex: "email",
        align: "left"
    },
    {
        title: "Rola",
        dataIndex: "role",
        align: "center"
    },
    {
        title: "Data rejestracji",
        dataIndex: "date",
        align: "left",
        render: date => generateDate(date)
    },
    {
        title: "Opcje",
        dataIndex: "options",
        align: "left",
        render: id => generateOptions(id)
    }
];
