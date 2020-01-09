import apiAddresses from "../../../_config/apiAddresses";
import fetchOptions from "../../../_config/fetchOptions";
import serverStatuses from "../../../_config/serverStatuses";

const { TZAR } = apiAddresses;
const { NATIONS, SPELLS, TECHNOLOGIES, UNITS } = TZAR;

const { method, headers } = fetchOptions;
const { GET } = method;

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

export const fetchNationsList = (
    dispatchNationsListLoaded,
    dispatchNationsLoadingError,
    dispatchNationsNotFound
) => {
    const options = {
        method: GET,
        headers
    };

    fetch(NATIONS, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchNationsListLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchNationsLoadingError(response);
            } else {
                return dispatchNationsNotFound(response);
            }
        });
};

export const fetchSpellsList = (
    dispatchSpellsListLoaded,
    dispatchSpellsLoadingError,
    dispatchSpellsNotFound
) => {
    const options = {
        method: GET,
        headers
    };

    fetch(SPELLS, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchSpellsListLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchSpellsLoadingError(response);
            } else {
                return dispatchSpellsNotFound(response);
            }
        });
};

export const fetchTechnologiesList = (
    dispatchTechnologiesListLoaded,
    dispatchTechnologiesLoadingError,
    dispatchTechnologiesNotFound
) => {
    const options = {
        method: GET,
        headers
    };

    fetch(TECHNOLOGIES, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchTechnologiesListLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchTechnologiesLoadingError(response);
            } else {
                return dispatchTechnologiesNotFound(response);
            }
        });
};

export const fetchUnitsList = (
    dispatchUnitsListLoaded,
    dispatchUnitsLoadingError,
    dispatchUnitsNotFound
) => {
    const options = {
        method: GET,
        headers
    };

    fetch(UNITS, options)
        .then(response => {
            if (response.status < INTERNAL_ERROR) {
                return response.json().then(data => {
                    return { status: response.status, data };
                });
            } else {
                console.log("Server Error!");
                throw response;
            }
        })
        .then(response => {
            console.log(response);
            if (response.status === STATUS_OK) {
                dispatchUnitsListLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchUnitsLoadingError(response);
            } else {
                return dispatchUnitsNotFound(response);
            }
        });
};
