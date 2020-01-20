import addressFragments from "./addressFragments";

const {
    ADMIN,
    ARTICLES,
    NEWS,
    USERS,
    ADD,
    EDIT,
    REMOVE,
    ID_PARAM,
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

const routesPaths = {
    GENERAL: {
        INDEX: "/",
        LOGIN: `/${LOGIN}`,
        REGISTER: `/${REGISTER}`
    },
    ARTICLES: {
        MAIN: `/${ADMIN}/${ARTICLES}`,
        ADD: `/${ADMIN}/${ARTICLES}/${ADD}`,
        EDIT: `/${ADMIN}/${ARTICLES}/${EDIT}/:${ID_PARAM}`,
        REMOVE: `/${ADMIN}/${ARTICLES}/${REMOVE}/:${ID_PARAM}`
    },
    NEWS: {
        SINGLE: `/${NEWS}/:${ID_PARAM}`,
        MAIN: `/${ADMIN}/${NEWS}`,
        ADD: `/${ADMIN}/${NEWS}/${ADD}`,
        EDIT: `/${ADMIN}/${NEWS}/${EDIT}/:${ID_PARAM}`,
        REMOVE: `/${ADMIN}/${NEWS}/${REMOVE}/:${ID_PARAM}`
    },
    KNIGHTS: {
        MAIN: `/${KNIGHTS}/`,
        BUILDINGS: `/${KNIGHTS}/${BUILDINGS}`,
        UNITS: `/${KNIGHTS}/${UNITS}`
    },
    TZAR: {
        MAIN: `/${TZAR}/`,
        NATIONS: `/${TZAR}/${NATIONS}`,
        SPELLS: `/${TZAR}/${SPELLS}`,
        TECHNOLOGIES: `/${TZAR}/${TECHNOLOGIES}`,
        UNITS: `/${TZAR}/${UNITS}`
    },
    USERS: {
        SINGLE: `/${USERS}/:${ID_PARAM}`,
        MAIN: `/${ADMIN}/${USERS}`,
        ADD: `/${ADMIN}/${USERS}/${ADD}`,
        EDIT: `/${ADMIN}/${USERS}/${EDIT}/:${ID_PARAM}`,
        REMOVE: `/${ADMIN}/${USERS}/${REMOVE}/:${ID_PARAM}`
    }
};

export default routesPaths;
