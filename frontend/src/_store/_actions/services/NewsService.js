import apiAddresses from "../../../_config/apiAddresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { NEWS } = apiAddresses;
const { LIST, ADD, EDIT, REMOVE, SINGLE } = NEWS;

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

const { method, headers } = fetchOptions;
const { GET, POST, PATCH, DELETE } = method;

export const getAllNews = dispatchNewsListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(LIST, options)
        .then(response => {
            return response.json();
        })
        .then(news => {
            return dispatchNewsListLoaded(news);
        });
};

export const getSingleNews = (
    id,
    dispatchSingleNewsLoaded,
    dispatchNewsAuthError,
    dispatchNewsNotFound
) => {
    const options = {
        method: method.POST,
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
                dispatchSingleNewsLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNewsAuthError(response);
            } else {
                return dispatchNewsNotFound(response);
            }
        });
};

export const addNews = (
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
        method: POST,
        headers,
        body: JSON.stringify({ title, content, author, date, category })
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
        method: PATCH,
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
