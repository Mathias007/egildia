import apiAdressses from "../../../_config/apiAdresses";
import fetchOptions from "../../../_config/fetchOptions";

const { TZAR } = apiAdressses;
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
        .then(res => {
            return res.json();
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
        .then(res => {
            return res.json();
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
        .then(res => {
            return res.json();
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
        .then(res => {
            return res.json();
        })
        .then(units => {
            return dispatchUnitsListLoaded(units);
        });
};
