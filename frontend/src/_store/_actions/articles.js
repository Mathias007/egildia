import {
    getAllArticles,
    getAllocatedArticle,
    getSingleArticle,
    addArticle,
    editArticle,
    deleteArticle
} from "./services/ArticlesService";

import eventStatuses from "../../_config/eventStatuses";

const {
    ARTS_LIST_LOADED,
    ARTS_LIST_NOT_FOUND,
    ARTICLE_SUCCESSFULLY_LOADED,
    ARTICLE_NOT_FOUND,
    ARTICLE_ADDED,
    ARTICLE_ADDING_FAILED,
    ARTICLE_SUCCESFULLY_EDITED,
    ARTICLE_EDITING_FAILED,
    ARTICLE_SUCCESFULLY_DELETED,
    ARTICLE_DELETING_FAILED,
    AUTHENTICATION_ERROR,
    RESET_STATUS
} = eventStatuses.articles;

export const showArticlesList = () => {
    return (dispatch, getState) => {
        const dispatchArticlesListLoaded = function(response) {
            dispatch({
                type: ARTS_LIST_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchArticlesAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchArticlesNotFound = function(response) {
            dispatch({
                type: ARTS_LIST_NOT_FOUND,
                data: response.data,
                status: response.status
            });
        };

        return getAllArticles(
            dispatchArticlesListLoaded,
            dispatchArticlesAuthError,
            dispatchArticlesNotFound
        );
    };
};

export const showAllocatedArticle = allocationKey => {
    return (dispatch, getState) => {
        const dispatchSingleArticleLoaded = function(response) {
            dispatch({
                type: ARTICLE_SUCCESSFULLY_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchArticleNotFound = function(response) {
            dispatch({
                type: ARTICLE_NOT_FOUND,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return getAllocatedArticle(
            allocationKey,
            dispatchSingleArticleLoaded,
            dispatchArticleAuthError,
            dispatchArticleNotFound
        );
    };
};

export const showProperArticle = id => {
    return (dispatch, getState) => {
        const dispatchSingleArticleLoaded = function(response) {
            dispatch({
                type: ARTICLE_SUCCESSFULLY_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchArticleNotFound = function(response) {
            dispatch({
                type: ARTICLE_NOT_FOUND,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return getSingleArticle(
            id,
            dispatchSingleArticleLoaded,
            dispatchArticleAuthError,
            dispatchArticleNotFound
        );
    };
};

export const addNewArticle = (allocationKey, title, content, author, date) => {
    return (dispatch, getState) => {
        const dispatchArticleAdded = function(response) {
            dispatch({
                type: ARTICLE_ADDED,
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchArticleAddingFailed = function(response) {
            dispatch({
                type: ARTICLE_ADDING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return addArticle(
            allocationKey,
            title,
            content,
            author,
            date,
            dispatchArticleAdded,
            dispatchArticleAuthError,
            dispatchArticleAddingFailed
        );
    };
};

export const editSelectedArticle = (
    id,
    allocationKey,
    title,
    content,
    author,
    lastModified
) => {
    return (dispatch, getState) => {
        const dispatchArticleEdited = function(response) {
            dispatch({
                type: ARTICLE_SUCCESFULLY_EDITED,
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchArticleEditingFailed = function(response) {
            dispatch({
                type: ARTICLE_EDITING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return editArticle(
            id,
            allocationKey,
            title,
            content,
            author,
            lastModified,
            dispatchArticleEdited,
            dispatchArticleAuthError,
            dispatchArticleEditingFailed
        );
    };
};

export const deleteSelectedArticle = id => {
    return (dispatch, getState) => {
        const dispatchArticleDeleted = function(response) {
            dispatch({
                type: ARTICLE_SUCCESFULLY_DELETED,
                data: response.data,
                status: response.status
            });
            return response.data;
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchArticleDeletingFailed = function(response) {
            dispatch({
                type: ARTICLE_DELETING_FAILED,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return deleteArticle(
            id,
            dispatchArticleDeleted,
            dispatchArticleAuthError,
            dispatchArticleDeletingFailed
        );
    };
};

export const cleanServerStatus = () => {
    return (dispatch, getState) => {
        return dispatch({
            type: RESET_STATUS
        });
    };
};
