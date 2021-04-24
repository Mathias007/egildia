import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/pl";

import { dateFormat } from "../../../../_config/globalContentVariables";
import styles from "../../../../styles/styles";

import { Avatar, Divider } from "antd";

import Icon from "../../../components/universal/IconComponent";

export const generateAvatar = (name) => {
    return name ? (
        <Avatar style={styles.userAvatar} size="large">
            {name.charAt(0).toUpperCase()}
        </Avatar>
    ) : null;
};

export const generateCardFooterLink = (caption, path, id) => {
    return (
        <Link to={id ? `${path}/${id}` : path}>
            <Icon type="arrow-right" /> {caption}
        </Link>
    );
};

export const generateCardTitle = (title, caption) => {
    return (
        <span>
            {caption} <strong>{title}</strong>
        </span>
    );
};

export const generateNewsCardTitle = (backLink, backText, title) => {
    return (
        <>
            <Link to={backLink}>
                <Icon type="arrow-left" /> {backText}
            </Link>
            <Divider type="vertical" />
            <span>{title}</span>
        </>
    );
};

export const generateContentPreview = (
    content,
    limit,
    moreCaption,
    morePath,
    id
) => {
    return (
        <p>
            {content.slice(0, limit)}{" "}
            {content.length > limit ? (
                <Link to={`${morePath}/${id}`}>
                    <span>{moreCaption}</span>
                </Link>
            ) : null}
        </p>
    );
};

export const generateComments = (caption, comments) => {
    return (
        <span>
            <Icon type="idcard" /> {caption} <strong>{comments}</strong>
        </span>
    );
};

export const generateMetaDescription = (
    date,
    firstCaption,
    author,
    secondCaption
) => {
    return (
        <>
            <span>
                {firstCaption} {moment(date).format(dateFormat)}
            </span>
            {author ? (
                <>
                    <Divider type="vertical" />
                    <span>
                        {secondCaption} <strong>{author}</strong>
                    </span>
                </>
            ) : null}
        </>
    );
};

export const generateOptions = (editPath, removePath, id, caption) => {
    return (
        <>
            {caption ? <strong>{caption}</strong> : null}
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

export const generateDate = (date) => moment(date).format(dateFormat);
