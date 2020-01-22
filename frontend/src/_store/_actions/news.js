import {
    getAllNews,
    getSingleNews,
    addNews,
    editNews,
    deleteNews
} from "./services/NewsService";

import eventStatuses from "../../_config/eventStatuses";

const {
    NEWS_LIST_LOADED,
    NEWS_LIST_NOT_FOUND,
    NEWS_SUCCESSFULLY_LOADED,
    NEWS_NOT_FOUND,
    NEWS_ADDED,
    NEWS_ADDING_FAILED,
    NEWS_SUCCESFULLY_EDITED,
    NEWS_EDITING_FAILED,
    NEWS_SUCCESFULLY_DELETED,
    NEWS_DELETING_FAILED,
    AUTHENTICATION_ERROR
} = eventStatuses.news;

export const showNewsList = () => {
    return (dispatch, getState) => {
        const dispatchNewsListLoaded = function(response) {
            dispatch({
                type: NEWS_LIST_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchNewsNotFound = function(response) {
            dispatch({
                type: NEWS_LIST_NOT_FOUND,
                data: response.data,
                status: response.status
            });
        };

        return getAllNews(
            dispatchNewsListLoaded,
            dispatchNewsAuthError,
            dispatchNewsNotFound
        );
    };
};

export const showProperNews = id => {
    return (dispatch, getState) => {
        const dispatchSingleNewsLoaded = function(response) {
            dispatch({
                type: NEWS_SUCCESSFULLY_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchNewsNotFound = function(response) {
            dispatch({
                type: NEWS_NOT_FOUND,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return getSingleNews(
            id,
            dispatchSingleNewsLoaded,
            dispatchNewsAuthError,
            dispatchNewsNotFound
        );
    };
};

export const addSingleNews = (title, content, author, date, category) => {
    return (dispatch, getState) => {
        const dispatchNewsAdded = function(response) {
            dispatch({
                type: NEWS_ADDED,
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchNewsAddingFailed = function(response) {
            dispatch({
                type: NEWS_ADDING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return addNews(
            title,
            content,
            author,
            date,
            category,
            dispatchNewsAdded,
            dispatchNewsAuthError,
            dispatchNewsAddingFailed
        );
    };
};

export const editSelectedNews = (
    id,
    title,
    content,
    author,
    lastModified,
    category
) => {
    return (dispatch, getState) => {
        const dispatchNewsEdited = function(response) {
            dispatch({
                type: NEWS_SUCCESFULLY_EDITED,
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchNewsEditingFailed = function(response) {
            dispatch({
                type: NEWS_EDITING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return editNews(
            id,
            title,
            content,
            author,
            lastModified,
            category,
            dispatchNewsEdited,
            dispatchNewsAuthError,
            dispatchNewsEditingFailed
        );
    };
};

export const deleteSelectedNews = id => {
    return (dispatch, getState) => {
        const dispatchNewsDeleted = function(response) {
            dispatch({
                type: NEWS_SUCCESFULLY_DELETED,
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchNewsDeletingFailed = function(response) {
            dispatch({
                type: NEWS_DELETING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return deleteNews(
            id,
            dispatchNewsDeleted,
            dispatchNewsAuthError,
            dispatchNewsDeletingFailed
        );
    };
};
