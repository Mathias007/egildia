import addressFragments from "./addressFragments";

const {
    ADMIN,
    ARTICLES,
    NEWS,
    USERS,
    ADD,
    EDIT,
    REMOVE,
    LOGIN,
    REGISTER
} = addressFragments;

const linksPaths = {
    GENERAL: {
        INDEX: "/",
        LOGIN: `/${LOGIN}`,
        REGISTER: `/${REGISTER}`
    },
    ARTICLES: {
        MAIN: `/${ADMIN}/${ARTICLES}`,
        ADD: `/${ADMIN}/${ARTICLES}/${ADD}`,
        EDIT: `/${ADMIN}/${ARTICLES}/${EDIT}`,
        REMOVE: `/${ADMIN}/${ARTICLES}/${REMOVE}`
    },
    NEWS: {
        SINGLE: `/${NEWS}`,
        MAIN: `/${ADMIN}/${NEWS}`,
        ADD: `/${ADMIN}/${NEWS}/${ADD}`,
        EDIT: `/${ADMIN}/${NEWS}/${EDIT}`,
        REMOVE: `/${ADMIN}/${NEWS}/${REMOVE}`
    },
    USERS: {
        SINGLE: `/${USERS}`,
        MAIN: `/${ADMIN}/${USERS}`,
        ADD: `/${ADMIN}/${USERS}/${ADD}`,
        EDIT: `/${ADMIN}/${USERS}/${EDIT}`,
        REMOVE: `/${ADMIN}/${USERS}/${REMOVE}`
    }
};

export default linksPaths;
