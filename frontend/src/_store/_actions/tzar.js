import eventStatuses from "../../_config/eventStatuses";

import {
    fetchNationsList,
    fetchSpellsList,
    fetchTechnologiesList,
    fetchUnitsList
} from "./services/TzarService";

const {
    TZAR_NATIONS_LOADED,
    TZAR_NATIONS_NOT_FOUND,
    TZAR_UNITS_LOADED,
    TZAR_UNITS_NOT_FOUND,
    TZAR_SPELLS_LOADED,
    TZAR_SPELLS_NOT_FOUND,
    TZAR_TECHNOLOGIES_LOADED,
    TZAR_TECHNOLOGIES_NOT_FOUND,
    AUTHENTICATION_ERROR
} = eventStatuses.tzar;

export const showNations = () => {
    return (dispatch, getState) => {
        const dispatchNationsListLoaded = function(response) {
            dispatch({
                type: TZAR_NATIONS_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchNationsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchNationsNotFound = function(response) {
            dispatch({
                type: TZAR_NATIONS_NOT_FOUND,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return fetchNationsList(
            dispatchNationsListLoaded,
            dispatchNationsAuthError,
            dispatchNationsNotFound
        );
    };
};

export const showSpells = () => {
    return (dispatch, getState) => {
        const dispatchSpellsListLoaded = function(response) {
            dispatch({
                type: TZAR_SPELLS_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchSpellsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchSpellsNotFound = function(response) {
            dispatch({
                type: TZAR_SPELLS_NOT_FOUND,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return fetchSpellsList(
            dispatchSpellsListLoaded,
            dispatchSpellsAuthError,
            dispatchSpellsNotFound
        );
    };
};

export const showTechnologies = () => {
    return (dispatch, getState) => {
        const dispatchTechnologiesListLoaded = function(response) {
            dispatch({
                type: TZAR_TECHNOLOGIES_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchTechnologiesAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchTechnologiesNotFound = function(response) {
            dispatch({
                type: TZAR_TECHNOLOGIES_NOT_FOUND,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return fetchTechnologiesList(
            dispatchTechnologiesListLoaded,
            dispatchTechnologiesAuthError,
            dispatchTechnologiesNotFound
        );
    };
};

export const showUnits = () => {
    return (dispatch, getState) => {
        const dispatchUnitsListLoaded = function(response) {
            dispatch({
                type: TZAR_UNITS_LOADED,
                data: response.data,
                status: response.status
            });
        };

        const dispatchUnitsAuthError = function(response) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        const dispatchUnitsNotFound = function(response) {
            dispatch({
                type: TZAR_UNITS_NOT_FOUND,
                data: response.data,
                status: response.status
            });
            throw response.data;
        };

        return fetchUnitsList(
            dispatchUnitsListLoaded,
            dispatchUnitsAuthError,
            dispatchUnitsNotFound
        );
    };
};
