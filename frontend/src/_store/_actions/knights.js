import fetchBuildingsList from "./services/KnightsBuildingsService";
import fetchUnitsList from "./services/KnightsUnitsService";

export const showBuildings = () => {
    return (dispatch, getState) => {
        const dispatchBuildingsListLoaded = function (buildings) {
            dispatch({
                type: "KAM_BUILDINGS_LOADED",
                data: buildings
            });
        };

        return fetchBuildingsList(dispatchBuildingsListLoaded);
    };
};

export const showUnits = () => {
    return (dispatch, getState) => {
        const dispatchUnitsListLoaded = function (units) {
            dispatch({
                type: "KAM_UNITS_LOADED",
                data: units
            });
        };

        return fetchUnitsList(dispatchUnitsListLoaded);
    };
};
