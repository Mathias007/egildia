import address from "../../../_config/address";
import eventStatuses from "../../../_config/eventStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { API_URL, NEWS, SINGLE, LIST, ADD, EDIT, DELETE } = address;
const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = eventStatuses;

const { method, headers } = fetchOptions;

export const getAllNews = dispatchNewsListLoaded => {
    const options = {
        method: method.GET,
        headers
    };

    fetch(`${API_URL}${NEWS}/${LIST}`, options)
        .then(res => {
            return res.json();
        })
        .then(news => {
            return dispatchNewsListLoaded(news);
        });
};

export const getSingleNews = (
    id,
    dispatchSingleArticleLoaded,
    dispatchArticleAuthError,
    dispatchArticleNotFound
) => {
    const options = {
        method: method.POST,
        headers,
        body: JSON.stringify({ id })
    };

    fetch(`${API_URL}${NEWS}/${SINGLE}`, options)
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

export const addNews = (
    id,
    title,
    content,
    author,
    date,
    category,
    dispatchNewsAdded,
    dispatchNewsAuthError,
    dispatchNewsAddingFailed
) => {
    const options = {
        method: method.POST,
        headers,
        body: JSON.stringify({ id, title, content, author, date, category })
    };

    fetch(`${API_URL}${NEWS}/${ADD}`, options)
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
                dispatchNewsAdded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNewsAuthError(response);
            } else {
                return dispatchNewsAddingFailed(response);
            }
        });
};

export const editNews = (
    id,
    title,
    content,
    author,
    category,
    lastModified,
    dispatchNewsEdited,
    dispatchNewsAuthError,
    dispatchNewsEditingFailed
) => {
    const options = {
        method: method.PATCH,
        headers,
        body: JSON.stringify({
            id,
            title,
            content,
            author,
            category,
            lastModified
        })
    };

    fetch(`${API_URL}${NEWS}/${EDIT}`, options)
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
                dispatchNewsEdited(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNewsAuthError(response);
            } else {
                return dispatchNewsEditingFailed(response);
            }
        });
};

export const deleteNews = (
    id,
    dispatchNewsDeleted,
    dispatchNewsAuthError,
    dispatchNewsDeletingFailed
) => {
    const options = {
        method: method.DELETE,
        headers,
        body: JSON.stringify({
            id
        })
    };

    fetch(`${API_URL}${NEWS}/${DELETE}`, options)
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
                dispatchNewsDeleted(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNewsAuthError(response);
            } else {
                return dispatchNewsDeletingFailed(response);
            }
        });
};
