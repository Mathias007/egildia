// importy

// statusy

// adres api

const fetchLogin = (
    name,
    password,
    remember,
    dispatchLoginSuccessful,
    dispatchUserAuthError,
    dispatchLoginFailed
) => {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ name, password })
    };

    fetch('http://localhost:5000/api/login', options)
        .then(res => {
            if (res.status < 500) {
                return res.json()
                    .then(data => {
                        return {
                            status: res.status, data
                        };
                    });
            } else {
                console.log("Server error!");
                throw res;
            }
        })
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                dispatchLoginSuccessful(res, name, remember);
            } else if (
                res.status === 403 || res.status === 401
            ) {
                dispatchUserAuthError(res);
            } else {
                dispatchLoginFailed(res);
            }
        });
};

export default fetchLogin;