import address from "../../../_config/address";
import eventStatuses from "../../../_config/eventStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = eventStatuses;

const { API_URL, LOGIN } = address;
const { method, headers } = fetchOptions;

const fetchLogin = (
    name,
    password,
    remember,
    dispatchLoginSuccessful,
    dispatchUserAuthError,
    dispatchLoginFailed
) => {
    const options = {
        method: method.POST,
        headers,
        body: JSON.stringify({ name, password })
    };

    fetch(`${API_URL}${LOGIN}`, options)
        .then(res => {
            if (res.status < INTERNAL_ERROR) {
                return res.json().then(data => {
                    return {
                        status: res.status,
                        data
                    };
                });
            } else {
                console.log("Server error!");
                throw res;
            }
        })
        .then(res => {
            console.log(res);
            if (res.status === STATUS_OK) {
                dispatchLoginSuccessful(res, name, remember);
            } else if (
                res.status === STATUS_FORBIDDEN ||
                res.status === STATUS_UNAUTHORIZED
            ) {
                dispatchUserAuthError(res);
            } else {
                dispatchLoginFailed(res);
            }
        });
};

export default fetchLogin;
