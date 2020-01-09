import eventStatuses from "../../_config/eventStatuses";

import { fetchBuildingsList, fetchUnitsList } from "./services/KnightsService";

const {
    KAM_BUILDINGS_LOADED,
    KAM_BUILDINGS_NOT_FOUND,
    KAM_UNITS_LOADED,
    KAM_UNITS_NOT_FOUND,
    AUTHENTICATION_ERROR
} = eventStatuses.knights;

export const showBuildings = () => {
    return (dispatch, getState) => {
        const dispatchBuildingsListLoaded = function(response) {
            dispatch({
                type: KAM_BUILDINGS_LOADED,
                data: response.data
            });
        };

        const dispatchBuildingsAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchBuildingsNotFound = function(response) {
            dispatch({ type: KAM_BUILDINGS_NOT_FOUND, data: response.data });
            throw response.data;
        };

        return fetchBuildingsList(
            dispatchBuildingsListLoaded,
            dispatchBuildingsAuthError,
            dispatchBuildingsNotFound
        );
    };
};

export const showUnits = () => {
    return (dispatch, getState) => {
        const dispatchUnitsListLoaded = function(response) {
            dispatch({
                type: KAM_UNITS_LOADED,
                data: response.data
            });
        };

        const dispatchUnitsAuthError = function(response) {
            dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
            throw response.data;
        };

        const dispatchUnitsNotFound = function(response) {
            dispatch({ type: KAM_UNITS_NOT_FOUND, data: response.data });
            throw response.data;
        };

        return fetchUnitsList(
            dispatchUnitsListLoaded,
            dispatchUnitsAuthError,
            dispatchUnitsNotFound
        );
    };
};
