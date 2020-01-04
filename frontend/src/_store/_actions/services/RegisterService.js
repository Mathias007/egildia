import apiAdressses from "../../../_config/apiAdresses";
import serverStatuses from "../../../_config/serverStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const { USERS } = apiAdressses;
const { REGISTER } = USERS;

const {
    STATUS_OK,
    STATUS_CREATED,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

const { method, headers } = fetchOptions;
const { POST } = method;

export const fetchRegister = (
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

    fetch(REGISTER, options)
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

export default fetchRegister;
