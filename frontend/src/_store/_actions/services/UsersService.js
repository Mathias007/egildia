import apiAddresses from "../../../_config/apiAddresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { USERS } = apiAddresses;
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
        .then(response => {
            return response.json();
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
    role,
    date,
    dispatchRegistrationSuccessful,
    dispatchRegistrationError,
    dispatchRegistrationFailed
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({ name, email, password, role, date })
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
            if (response.status === STATUS_OK || STATUS_CREATED) {
                dispatchRegistrationSuccessful(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchRegistrationError(response);
            } else {
                return dispatchRegistrationFailed(response);
            }
        });
};

export const editUser = (
    id,
    name,
    email,
    password,
    role,
    date,
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
            password,
            role,
            date
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
