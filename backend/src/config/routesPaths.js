import addressFragments from "./addressFragments";
const {
    API,
    ARTICLES,
    NEWS,
    KNIGHTS,
    TZAR,
    USERS,
    LOGIN,
    REFRESH,
    ADD,
    EDIT,
    LIST,
    REMOVE,
    SINGLE,
    SINGLE_KEY,
    BUILDINGS,
    NATIONS,
    TECHNOLOGIES,
    SPELLS,
    UNITS
} = addressFragments;

const routesPaths = {
    API: `/${API}`,
    ARTICLES: {
        LIST: `/${API}/${ARTICLES}/${LIST}`,
        SINGLE: `/${API}/${ARTICLES}/${SINGLE}`,
        SINGLE_KEY: `/${API}/${ARTICLES}/${SINGLE_KEY}`,
        ADD: `/${API}/${ARTICLES}/${ADD}`,
        EDIT: `/${API}/${ARTICLES}/${EDIT}`,
        REMOVE: `/${API}/${ARTICLES}/${REMOVE}`
    },
    AUTH: {
        LOGIN: `/${API}/${LOGIN}`,
        REFRESH: `/${API}/${REFRESH}`
    },
    KNIGHTS: {
        BUILDINGS: `/${API}/${KNIGHTS}/${BUILDINGS}`,
        UNITS: `/${API}/${KNIGHTS}/${UNITS}`
    },
    NEWS: {
        LIST: `/${API}/${NEWS}/${LIST}`,
        SINGLE: `/${API}/${NEWS}/${SINGLE}`,
        ADD: `/${API}/${NEWS}/${ADD}`,
        EDIT: `/${API}/${NEWS}/${EDIT}`,
        REMOVE: `/${API}/${NEWS}/${REMOVE}`
    },
    TZAR: {
        NATIONS: `/${API}/${TZAR}/${NATIONS}`,
        SPELLS: `/${API}/${TZAR}/${SPELLS}`,
        TECHNOLOGIES: `/${API}/${TZAR}/${TECHNOLOGIES}`,
        UNITS: `/${API}/${TZAR}/${UNITS}`
    },
    USERS: {
        LIST: `/${API}/${USERS}/${LIST}`,
        SINGLE: `/${API}/${USERS}/${SINGLE}`,
        ADD: `/${API}/${USERS}/${ADD}`,
        EDIT: `/${API}/${USERS}/${EDIT}`,
        REMOVE: `/${API}/${USERS}/${REMOVE}`
    }
};

export default routesPaths;
