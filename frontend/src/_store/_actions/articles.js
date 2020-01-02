import {
    getAllArticles,
    getSingleArticle,
    addArticle,
    editArticle,
    deleteArticle
} from "./services/ArticlesService";

import eventStatuses from "../../_config/eventStatuses";

const {
    ARTICLE_SUCCESSFULLY_LOADED,
    ARTICLE_NOT_FOUND,
    ARTS_LIST_LOADED,
    ARTICLE_ADDED,
    AUTHENTICATION_ERROR,
    ARTICLE_ADDING_FAILED,
    ARTICLE_SUCCESFULLY_EDITED,
    ARTICLE_EDITING_FAILED,
    ARTICLE_SUCCESFULLY_DELETED,
    ARTICLE_DELETING_FAILED
} = eventStatuses.articles;

export const showProperArticle = allocationKey => {
    return (dispatch, getState) => {
        const dispatchSingleArticleLoaded = function(article) {
            dispatch({
                type: ARTICLE_SUCCESSFULLY_LOADED,
                data: article
            });
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchArticleNotFound = function(response) {
            dispatch({ type: ARTICLE_NOT_FOUND, data: response.data });
            throw response.data;
        };

        return getSingleArticle(
            allocationKey,
            dispatchSingleArticleLoaded,
            dispatchArticleAuthError,
            dispatchArticleNotFound
        );
    };
};

export const showArticlesList = () => {
    return (dispatch, getState) => {
        const dispatchArticlesListLoaded = function(articles) {
            dispatch({
                type: ARTS_LIST_LOADED,
                data: articles
            });
        };

        return getAllArticles(dispatchArticlesListLoaded);
    };
};

export const addNewArticle = (allocationKey, title, content, author, date) => {
    return (dispatch, getState) => {
        const dispatchArticleAdded = function(response) {
            dispatch({
                type: ARTICLE_ADDED,
                data: response.data
            });
            return response.data;
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchArticleAddingFailed = function(response) {
            dispatch({ type: ARTICLE_ADDING_FAILED, data: response.data });
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
                data: response.data
            });
            return response.data;
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchArticleEditingFailed = function(response) {
            dispatch({ type: ARTICLE_EDITING_FAILED, data: response.data });
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
                data: response.data
            });
            return response.data;
        };

        const dispatchArticleAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchArticleDeletingFailed = function(response) {
            dispatch({ type: ARTICLE_DELETING_FAILED, data: response.data });
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
