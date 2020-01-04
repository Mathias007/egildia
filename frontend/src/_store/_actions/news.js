import {
    getAllNews,
    getSingleNews,
    addNews,
    editNews,
    deleteNews
} from "./services/NewsService";

import eventStatuses from "../../_config/eventStatuses";

const {
    NEWS_SUCCESSFULLY_LOADED,
    NEWS_NOT_FOUND,
    NEWS_LIST_LOADED,
    NEWS_ADDED,
    AUTHENTICATION_ERROR,
    NEWS_ADDING_FAILED,
    NEWS_SUCCESFULLY_EDITED,
    NEWS_EDITING_FAILED,
    NEWS_SUCCESFULLY_DELETED,
    NEWS_DELETING_FAILED
} = eventStatuses.news;

export const showProperNews = id => {
    return (dispatch, getState) => {
        const dispatchSingleNewsLoaded = function(news) {
            dispatch({
                type: NEWS_SUCCESSFULLY_LOADED,
                data: news
            });
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchNewsNotFound = function(response) {
            dispatch({ type: NEWS_NOT_FOUND, data: response.data });
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

export const showNewsList = () => {
    return (dispatch, getState) => {
        const dispatchNewsListLoaded = function(news) {
            dispatch({
                type: NEWS_LIST_LOADED,
                data: news
            });
        };

        return getAllNews(dispatchNewsListLoaded);
    };
};

export const addSingleNews = (title, content, author, date, category) => {
    return (dispatch, getState) => {
        const dispatchNewsAdded = function(response) {
            dispatch({
                type: NEWS_ADDED,
                data: response.data
            });
            return response.data;
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchNewsAddingFailed = function(response) {
            dispatch({ type: NEWS_ADDING_FAILED, data: response.data });
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
                data: response.data
            });
            return response.data;
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchNewsEditingFailed = function(response) {
            dispatch({ type: NEWS_EDITING_FAILED, data: response.data });
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
                data: response.data
            });
            return response.data;
        };

        const dispatchNewsAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchNewsDeletingFailed = function(response) {
            dispatch({ type: NEWS_DELETING_FAILED, data: response.data });
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
