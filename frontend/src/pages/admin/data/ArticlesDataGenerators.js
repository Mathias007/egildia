import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { Divider, Icon } from "antd";

const generateOptions = id => {
    return (
        <>
            <Divider type="vertical" />
            <Link to={`articles/edit/${id}`}>
                <Icon type="edit" />
            </Link>
            <Divider type="vertical" />
            <Link to={`articles/remove/${id}`}>
                <Icon type="delete" />
            </Link>
        </>
    );
};

const generateDate = date => moment(date).format("LLLL");

export const articlesColumnsStructure = [
    {
        title: "LP",
        dataIndex: "number",
        align: "center"
    },
    {
        title: "Klucz artykułu",
        dataIndex: "allocationKey",
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
