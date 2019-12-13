import statuses from "../../../_config/statuses";
import address from "../../../_config/address"

const {
    STATUS_OK,
    STATUS_CREATED,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = statuses;

const { API_URL, REGISTER } = address;

export const fetchRegister = (
    name,
    email,
    password,
    dispatchRegistrationSuccessful,
    dispatchRegistrationError,
    dispatchRegistrationFailed
) => {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
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