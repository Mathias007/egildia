import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { Divider, Icon } from "antd";

const generateDate = date => moment(date).format("LLLL");

const generateOptions = id => {
    return (
        <>
            <Divider type="vertical" />
            <Link to={`news/edit/${id}`}>
                <Icon type="edit" />
            </Link>
            <Divider type="vertical" />
            <Link to={`news/remove/${id}`}>
                <Icon type="delete" />
            </Link>
        </>
    );
};

export const newsColumnsStructure = [
    {
        title: "LP",
        dataIndex: "number",
        align: "center"
    },
    {
        title: "Kategoria",
        dataIndex: "category",
        align: "center"
    },
    {
        title: "Tytuł",
        dataIndex: "title",
        align: "left"
    },
    {
        title: "Treść",
        dataIndex: "content",
        align: "center"
    },
    {
        title: "Autor",
        dataIndex: "author",
        align: "center"
    },
    {
        title: "Data utworzenia",
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
