import eventStatuses from "../../_config/eventStatuses";

import {fetchNationsList, fetchSpellsList, fetchTechnologiesList, fetchUnitsList  } from "./services/TzarService";

const {
    TZAR_NATIONS_LOADED,
    TZAR_UNITS_LOADED,
    TZAR_SPELLS_LOADED,
    TZAR_TECHNOLOGIES_LOADED
} = eventStatuses.tzar;

export const showNations = () => {
    return (dispatch, getState) => {
        const dispatchNationsListLoaded = function(nations) {
            dispatch({
                type: TZAR_NATIONS_LOADED,
                data: nations
            });
        };

        return fetchNationsList(dispatchNationsListLoaded);
    };
};

export const showUnits = () => {
    return (dispatch, getState) => {
        const dispatchUnitsListLoaded = function(units) {
            dispatch({
                type: TZAR_UNITS_LOADED,
                data: units
            });
        };

        return fetchUnitsList(dispatchUnitsListLoaded);
    };
};

export const showSpells = () => {
    return (dispatch, getState) => {
        const dispatchSpellsListLoaded = function(spells) {
            dispatch({
                type: TZAR_SPELLS_LOADED,
                data: spells
            });
        };

        return fetchSpellsList(dispatchSpellsListLoaded);
    };
};

export const showTechnologies = () => {
    return (dispatch, getState) => {
        const dispatchTechnologiesListLoaded = function(technologies) {
            dispatch({
                type: TZAR_TECHNOLOGIES_LOADED,
                data: technologies
            });
        };

        return fetchTechnologiesList(dispatchTechnologiesListLoaded);
    };
};
