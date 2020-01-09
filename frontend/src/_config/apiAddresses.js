import addressFragments from "./addressFragments";

const {
    API_URL,
    ARTICLES,
    NEWS,
    USERS,
    ADD,
    EDIT,
    REMOVE,
    SINGLE,
    KEY,
    LIST,
    LOGIN,
    KNIGHTS,
    BUILDINGS,
    UNITS,
    TZAR,
    NATIONS,
    SPELLS,
    TECHNOLOGIES
} = addressFragments;

const apiAddresses = {
    ARTICLES: {
        MAIN: `${API_URL}${ARTICLES}`,
        LIST: `${API_URL}${ARTICLES}/${LIST}`,
        ADD: `${API_URL}${ARTICLES}/${ADD}`,
        EDIT: `${API_URL}${ARTICLES}/${EDIT}`,
        REMOVE: `${API_URL}${ARTICLES}/${REMOVE}`,
        SINGLE: `${API_URL}${ARTICLES}/${SINGLE}`,
        SINGLE_KEY: `${API_URL}${ARTICLES}/${SINGLE}-${KEY}`
    },
    NEWS: {
        MAIN: `${API_URL}${NEWS}`,
        LIST: `${API_URL}${NEWS}/${LIST}`,
        ADD: `${API_URL}${NEWS}/${ADD}`,
        EDIT: `${API_URL}${NEWS}/${EDIT}`,
        REMOVE: `${API_URL}${NEWS}/${REMOVE}`,
        SINGLE: `${API_URL}${NEWS}/${SINGLE}`
    },

    KNIGHTS: {
        MAIN: `${API_URL}${KNIGHTS}`,
        BUILDINGS: `${API_URL}${KNIGHTS}/${BUILDINGS}`,
        UNITS: `${API_URL}${KNIGHTS}/${UNITS}`
    },
    TZAR: {
        MAIN: `${API_URL}${TZAR}`,
        NATIONS: `${API_URL}${TZAR}/${NATIONS}`,
        SPELLS: `${API_URL}${TZAR}/${SPELLS}`,
        TECHNOLOGIES: `${API_URL}${TZAR}/${TECHNOLOGIES}`,
        UNITS: `${API_URL}${TZAR}/${UNITS}`
    },
    USERS: {
        MAIN: `${API_URL}${USERS}`,
        LIST: `${API_URL}${USERS}/${LIST}`,
        ADD: `${API_URL}${USERS}/${ADD}`,
        EDIT: `${API_URL}${USERS}/${EDIT}`,
        REMOVE: `${API_URL}${USERS}/${REMOVE}`,
        SINGLE: `${API_URL}${USERS}/${SINGLE}`,
        LOGIN: `${API_URL}${LOGIN}`
    }
};

export default apiAddresses;
