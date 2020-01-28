import { generateDate, generateOptions } from "./AdminDataGenerators";

import linksPaths from "../../../_config/linksPaths";
const { NEWS } = linksPaths;

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
        render: id => generateOptions(NEWS.EDIT, NEWS.REMOVE, id)
    }
];
