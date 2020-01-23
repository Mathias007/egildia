import eventStatuses from "../../_config/eventStatuses";

const {
    ARTS_LIST_LOADED,
    ARTS_LIST_NOT_FOUND,
    ARTICLE_SUCCESSFULLY_LOADED,
    ARTICLE_NOT_FOUND,
    ARTICLE_ADDED,
    ARTICLE_ADDING_FAILED,
    ARTICLE_SUCCESFULLY_EDITED,
    ARTICLE_EDITING_FAILED,
    ARTICLE_SUCCESFULLY_DELETED,
    ARTICLE_DELETING_FAILED,
    AUTHENTICATION_ERROR,
    RESET_STATUS
} = eventStatuses.articles;

const initialState = {
    articles: [],
    properArticle: {},
    errorMessage: "",
    status: null
};

export default function articles(state = initialState, action) {
    switch (action.type) {
        case ARTS_LIST_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                articles: action.data.articles,
                errorMessage: action.data.message
            };

        case ARTS_LIST_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case ARTICLE_SUCCESSFULLY_LOADED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                properArticle: action.data.article,
                errorMessage: action.data.message
            };

        case ARTICLE_NOT_FOUND:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case ARTICLE_ADDED:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case AUTHENTICATION_ERROR:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case ARTICLE_ADDING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case ARTICLE_SUCCESFULLY_EDITED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case ARTICLE_EDITING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case ARTICLE_SUCCESFULLY_DELETED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case ARTICLE_DELETING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case RESET_STATUS:
            return { ...state, status: null };

        default:
            return state;
    }
}
