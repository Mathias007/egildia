// import
// statusy

const persistTokens = store => next => action => {
    switch (action.type) {
        case "USER_LOADED":
            console.log(store.getState().auth);
            break;

        case "LOGIN_SUCCESSFUL":
            localStorage.setItem("accessToken", action.data.accessToken);
            localStorage.setItem("refreshToken", action.data.refreshToken)
            localStorage.setItem("remember", action.remember);
            localStorage.setItem("name", action.name);
            break;

        case "LOGOUT_SUCCESSFUL":
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("remember");
            localStorage.removeItem("name");
            break;

        default:
            break;
    }

    return next(action);
};

export default persistTokens;