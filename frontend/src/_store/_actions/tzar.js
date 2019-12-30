import eventStatuses from "../../_config/eventStatuses";

import fetchNationsList from "./services/TzarNationsService";
import fetchUnitsList from "./services/TzarUnitsService";
import fetchSpellsList from "./services/TzarSpellsService";
import fetchTechnologiesList from "./services/TzarTechnologiesService";

const {
    TZAR_NATIONS_LOADED,
    TZAR_UNITS_LOADED,
    TZAR_SPELLS_LOADED,
    TZAR_TECHNOLOGIES_LOADED
} = eventStatuses.knights;

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
