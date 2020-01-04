import addressFragments from "./addressFragments";

const {
    API_URL,
    ARTICLES,
    NEWS,
    ADD,
    EDIT,
    REMOVE,
    SINGLE,
    LIST,
    LOGIN,
    REGISTER,
    KNIGHTS,
    BUILDINGS,
    UNITS,
    TZAR,
    NATIONS,
    SPELLS,
    TECHNOLOGIES
} = addressFragments;

const apiAdressses = {
    ARTICLES: {
        MAIN: `${API_URL}${ARTICLES}`,
        LIST: `${API_URL}${ARTICLES}/${LIST}`,
        ADD: `${API_URL}${ARTICLES}/${ADD}`,
        EDIT: `${API_URL}${ARTICLES}/${EDIT}`,
        REMOVE: `${API_URL}${ARTICLES}/${REMOVE}`,
        SINGLE: `${API_URL}${ARTICLES}/${SINGLE}`
    },
    NEWS: {
        MAIN: `${API_URL}${NEWS}`,
        LIST: `${API_URL}${NEWS}/${LIST}`,
        ADD: `${API_URL}${NEWS}/${ADD}`,
        EDIT: `${API_URL}${NEWS}/${EDIT}`,
        REMOVE: `${API_URL}${NEWS}/${REMOVE}`,
        SINGLE: `${API_URL}${NEWS}/${SINGLE}`
    },
    USERS: {
        LOGIN: `${API_URL}${LOGIN}`,
        REGISTER: `${API_URL}${REGISTER}`
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
    }
};

export default apiAdressses;
