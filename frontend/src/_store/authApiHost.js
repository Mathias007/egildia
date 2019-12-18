import * as Axios from "axios";
import * as Auth from "./authFunctions";

import { logoutUser } from "./_actions/auth";

const apiHost = "http://localhost:5000";

export const api = Axios.create({
    baseURL: apiHost,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export const authenticationHeader = () => {
    return {
        Authorization: `Bearer ${Auth.getAccessToken()}`
    };
};

api.interceptors.response.use(
    response => response,
    async error => {
        const { status } = error.response;
        if (status === 401) {
            await logoutUser(null);
        } return Promise.reject(error);
    }
);