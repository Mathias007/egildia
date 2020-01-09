import apiAddresses from "../../../_config/apiAddresses";
import fetchOptions from "../../../_config/fetchOptions";
import serverStatuses from "../../../_config/serverStatuses";

const { KNIGHTS } = apiAddresses;
const { BUILDINGS, UNITS } = KNIGHTS;

const { method, headers } = fetchOptions;
const { GET } = method;

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = serverStatuses;

export const fetchBuildingsList = (
    dispatchBuildingsListLoaded,
    dispatchBuildingsLoadingError,
    dispatchBuildingsNotFound
) => {
    const options = {
        method: GET,
        headers
    };

    fetch(BUILDINGS, options)
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
                dispatchBuildingsListLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchBuildingsLoadingError(response);
            } else {
                return dispatchBuildingsNotFound(response);
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
