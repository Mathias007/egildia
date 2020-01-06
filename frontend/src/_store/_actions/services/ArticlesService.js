import apiAdressses from "../../../_config/apiAdresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { ARTICLES } = apiAdressses;
const { LIST, ADD, EDIT, REMOVE, SINGLE, SINGLE_KEY } = ARTICLES;

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

const { method, headers } = fetchOptions;
const { GET, POST, PATCH, DELETE } = method;

export const getAllArticles = dispatchArticlesListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(LIST, options)
        .then(res => {
            return res.json();
        })
        .then(articles => {
            return dispatchArticlesListLoaded(articles);
        });
};

export const getAllocatedArticle = (
    allocationKey,
    dispatchSingleArticleLoaded,
    dispatchArticleAuthError,
    dispatchArticleNotFound
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({ allocationKey })
    };

    fetch(SINGLE_KEY, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchSingleArticleLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleNotFound(response);
            }
        });
};

export const getSingleArticle = (
    id,
    dispatchSingleArticleLoaded,
    dispatchArticleAuthError,
    dispatchArticleNotFound
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({ id })
    };

    fetch(SINGLE, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchSingleArticleLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleNotFound(response);
            }
        });
};

export const addArticle = (
    allocationKey,
    title,
    content,
    author,
    date,
    dispatchArticleAdded,
    dispatchArticleAuthError,
    dispatchArticleAddingFailed
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({ allocationKey, title, content, author, date })
    };

    fetch(ADD, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchArticleAdded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleAddingFailed(response);
            }
        });
};

export const editArticle = (
    id,
    allocationKey,
    title,
    content,
    author,
    lastModified,
    dispatchArticleEdited,
    dispatchArticleAuthError,
    dispatchArticleEditingFailed
) => {
    const options = {
        method: PATCH,
        headers,
        body: JSON.stringify({
            id,
            allocationKey,
            title,
            content,
            author,
            lastModified
        })
    };

    fetch(EDIT, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchArticleEdited(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleEditingFailed(response);
            }
        });
};

export const deleteArticle = (
    id,
    dispatchArticleDeleted,
    dispatchArticleAuthError,
    dispatchArticleDeletingFailed
) => {
    const options = {
        method: DELETE,
        headers,
        body: JSON.stringify({
            id
        })
    };

    fetch(REMOVE, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchArticleDeleted(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleDeletingFailed(response);
            }
        });
};
