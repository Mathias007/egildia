import {
    generateAvatar,
    generateDate,
    generateOptions
} from "./AdminDataGenerators";

import linksPaths from "../../../_config/linksPaths";
const { USERS } = linksPaths;

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
        render: id => generateOptions(USERS.EDIT, USERS.REMOVE, id)
    }
];
