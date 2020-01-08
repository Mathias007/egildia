import apiAdressses from "../../../_config/apiAdresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { USERS } = apiAdressses;
const { LOGIN } = USERS;

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

const { method, headers } = fetchOptions;
const { POST } = method;

const fetchLogin = (
    name,
    password,
    remember,
    dispatchLoginSuccessful,
    dispatchUserAuthError,
    dispatchLoginFailed
) => {
    const options = {
        method: POST,
        headers,
        body: JSON.stringify({ name, password })
    };

    fetch(LOGIN, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return {
                        status: response.status,
                        data
                    };
                });
            } else {
                console.log("Server error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchLoginSuccessful(response, name, remember);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                dispatchUserAuthError(response);
            } else {
                dispatchLoginFailed(response);
            }
        });
};

export default fetchLogin;
