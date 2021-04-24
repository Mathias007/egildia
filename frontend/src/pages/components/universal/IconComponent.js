import React from "react";

import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    CalendarOutlined,
    CrownOutlined,
    DeleteOutlined,
    EditOutlined,
    FileAddOutlined,
    FlagOutlined,
    FolderOpenOutlined,
    IdcardOutlined,
    KeyOutlined,
    LockOutlined,
    LoginOutlined,
    LogoutOutlined,
    MailOutlined,
    PieChartOutlined,
    SettingOutlined,
    SkinOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserOutlined,
} from "@ant-design/icons";

export default function IconComponent(props) {
    const iconsPallete = 
        {
            "arrow-right": <ArrowRightOutlined />,
            "arrow-left": <ArrowLeftOutlined />,
            "idcard": <IdcardOutlined />,
            "edit": <EditOutlined />,
            "delete": <DeleteOutlined />,
            "key": <KeyOutlined />,
            "flag": <FlagOutlined />,
            "calendar": <CalendarOutlined />,
            "crown": <CrownOutlined />,
            "file-add": <FileAddOutlined />,
            "file-edit": <EditOutlined />,
            "folder-open": <FolderOpenOutlined />,
            "user": <UserOutlined />,
            "mail": <MailOutlined />,
            "user-add": <UserAddOutlined />,
            "user-delete": <UserDeleteOutlined />,
            "login": <LoginOutlined />,
            "logout": <LogoutOutlined />,
            "lock": <LockOutlined />,
            "setting": <SettingOutlined />,
            "pie-chart": <PieChartOutlined />,
            "skin": <SkinOutlined />,
        };

    const { type } = props;

    return iconsPallete[type] ? iconsPallete[type] : null;
}
