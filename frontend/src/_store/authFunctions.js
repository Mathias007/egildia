import { api, authenticationHeader } from "./authApiHost";
import { authorize, refreshToken } from "./_actions/auth";

import jwtDecode from "jwt-decode";

import {
    isValid,
    toDate,
    isBefore,
    differenceInMilliseconds,
    fromUnixTime
} from "date-fns";


export const getAccessToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");

export function setLocalStorageTokens(tokens) {
    if (tokens.accessToken)
        localStorage.setItem("accessToken", tokens.accessToken);
    if (tokens.refreshToken)
        localStorage.setItem("refreshToken", tokens.refreshToken);
}

export function removeLocalStorageTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

export function decodeJWT(token) {
    return token && jwtDecode(token);
}

export function getTimeDiff(exp) {
    if (!exp) return false;
    return differenceInMilliseconds(fromUnixTime(Number(exp)), new Date());
}

export function checkTokenValidity(token) {
    try {
        if (!token) {
            return false;
        }
        let expToken = decodeJWT(token).exp;
        const expMoment = toDate(expToken * 1000);
        if (isValid(expMoment)) {
            return isBefore(new Date(), expMoment);
        }
        return true;
    } catch (e) {
        return false;
    }
}

export function initializationUserAuthentication() {
    console.log("pedro === pedzio");
    if (checkTokenValidity(getAccessToken())) {
        console.log("access token obecny");
        const data = {
            accessToken: getAccessToken(),
            refreshToken: getRefreshToken()
        };
        return authorize(data);
    } else {        
        if (checkTokenValidity(getRefreshToken())) {
            console.log("refresh token obecny, access tokena brak");
            return refreshToken()
                .then(() => {
                    return Promise.resolve();
                })
                .catch(e => {
                    return Promise.reject(e);
                });
        } else console.log("brak refresh tokena");
    }
}

//ENDPOINTS
export async function loginInTheApplication(login, password) {
    return await api.post(`/api/login`, { name: login, password: password });
}
export async function postRefreshToken(refreshToken) {
    return await api.post(`/api/refresh`, {
        refreshToken: `Bearer ${refreshToken}`
    });
}
export async function registerUsers(data) {
    return await api.post(`/api/register`, data, {
        headers: authenticationHeader()
    });
}
export async function getUsersList() {
    return await api.get(`/api/users`, { headers: authenticationHeader() });
}
