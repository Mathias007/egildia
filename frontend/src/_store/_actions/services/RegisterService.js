import address from "../../../_config/address";
import eventStatuses from "../../../_config/eventStatuses";
import fetchOptions from "../../../_config/fetchOptions";

const {
    STATUS_OK,
    STATUS_CREATED,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = eventStatuses;

const { API_URL, REGISTER } = address;
const { method, headers } = fetchOptions;

export const fetchRegister = (
    name,
    email,
    password,
    dispatchRegistrationSuccessful,
    dispatchRegistrationError,
    dispatchRegistrationFailed
) => {
    const options = {
        method: method.POST,
        headers,
        body: JSON.stringify({ name, email, password })
    };

    fetch(`${API_URL}${REGISTER}`, options)
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
