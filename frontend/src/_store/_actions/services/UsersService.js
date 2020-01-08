import apiAdressses from "../../../_config/apiAdresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { USERS } = apiAdressses;
const { LIST, ADD, EDIT, REMOVE, SINGLE } = USERS;

const {
    STATUS_OK,
    STATUS_CREATED,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

const { method, headers } = fetchOptions;
const { GET, POST, PATCH, DELETE } = method;

export const getAllUsers = dispatchUsersListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(LIST, options)
        .then(res => {
            return res.json();
        })
        .then(users => {
            return dispatchUsersListLoaded(users);
        });
};

export const getSingleUser = (
    id,
    dispatchSingleUserLoaded,
    dispatchUserAuthError,
    dispatchUserNotFound
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
                dispatchSingleUserLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchUserAuthError(response);
            } else {
                return dispatchUserNotFound(response);
            }
        });
};

export const addUser = (
    name,
    email,
    password,
    dispatchRegistrationSuccessful,
    dispatchRegistrationError,
    dispatchRegistrationFailed
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({ name, email, password })
    };

    fetch(ADD, options)
        .then(res => {
            if (res.status < INTERNAL_ERROR) {
                return res.json().then(data => {
                    return { status: res.status, data };
                });
            } else {
                console.log("Server Error!");
                throw res;
            }
        })
        .then(res => {
            console.log(res);
            if (res.status === STATUS_OK || STATUS_CREATED) {
                dispatchRegistrationSuccessful(res);
            } else if (
                res.status === STATUS_FORBIDDEN ||
                res.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchRegistrationError(res);
            } else {
                return dispatchRegistrationFailed(res);
            }
        });
};

export const editUser = (
    id,
    name,
    email,
    password,
    dispatchUserEdited,
    dispatchUserAuthError,
    dispatchUserEditingFailed
) => {
    const options = {
        method: PATCH,
        headers,
        body: JSON.stringify({
            id,
            name,
            email,
            password
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
                dispatchUserEdited(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchUserAuthError(response);
            } else {
                return dispatchUserEditingFailed(response);
            }
        });
};

export const deleteUser = (
    id,
    dispatchUserDeleted,
    dispatchUserAuthError,
    dispatchUserDeletingFailed
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
                dispatchUserDeleted(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchUserAuthError(response);
            } else {
                return dispatchUserDeletingFailed(response);
            }
        });
};
