import apiAddresses from "../../../_config/apiAddresses";
import fetchOptions from "../../../_config/fetchOptions";

const { TZAR } = apiAddresses;
const { NATIONS, SPELLS, TECHNOLOGIES, UNITS } = TZAR;

const { method, headers } = fetchOptions;
const { GET } = method;

// obsługa statusów do dodania

export const fetchNationsList = dispatchNationsListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(NATIONS, options)
        .then(response => {
            return response.json();
        })
        .then(nations => {
            return dispatchNationsListLoaded(nations);
        });
};

export const fetchSpellsList = dispatchSpellsListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(SPELLS, options)
        .then(response => {
            return response.json();
        })
        .then(spells => {
            return dispatchSpellsListLoaded(spells);
        });
};

export const fetchTechnologiesList = dispatchTechnologiesListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(TECHNOLOGIES, options)
        .then(response => {
            return response.json();
        })
        .then(technologies => {
            return dispatchTechnologiesListLoaded(technologies);
        });
};

export const fetchUnitsList = dispatchUnitsListLoaded => {
    const options = {
        method: GET,
        headers
    };

    fetch(UNITS, options)
        .then(response => {
            return response.json();
        })
        .then(units => {
            return dispatchUnitsListLoaded(units);
        });
};
