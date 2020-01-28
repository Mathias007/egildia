import { generateDate, generateOptions } from "./AdminDataGenerators";

import linksPaths from "../../../_config/linksPaths";
const { ARTICLES } = linksPaths;

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
        render: id => generateOptions(ARTICLES.EDIT, ARTICLES.REMOVE, id)
    }
];
