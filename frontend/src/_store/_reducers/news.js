import eventStatuses from "../../_config/eventStatuses";

const {
    NEWS_LIST_LOADED,
    NEWS_LIST_NOT_FOUND,
    NEWS_SUCCESSFULLY_LOADED,
    NEWS_NOT_FOUND,
    NEWS_ADDED,
    NEWS_ADDING_FAILED,
    NEWS_SUCCESFULLY_EDITED,
    NEWS_EDITING_FAILED,
    NEWS_SUCCESFULLY_DELETED,
    NEWS_DELETING_FAILED,
    AUTHENTICATION_ERROR,
    RESET_STATUS
} = eventStatuses.news;

const initialState = {
    news: [],
    properNews: {},
    errorMessage: "",
    status: null
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case NEWS_LIST_LOADED:
            console.log(action.data.news);
            return {
                ...state,
                ...action.data,
                news: action.data.news,
                errorMessage: action.data.message
            };

        case NEWS_LIST_NOT_FOUND:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case NEWS_SUCCESSFULLY_LOADED:
            console.log(action.data.singleNews);
            return {
                ...state,
                ...action.data,
                properNews: action.data.singleNews,
                errorMessage: action.data.message
            };

        case NEWS_NOT_FOUND:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case NEWS_ADDED:
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
                errorMessage: action.data.message,
                status: action.status
            };

        case NEWS_ADDING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case NEWS_SUCCESFULLY_EDITED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case NEWS_EDITING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case NEWS_SUCCESFULLY_DELETED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case NEWS_DELETING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message,
                status: action.status
            };

        case RESET_STATUS:
            return { ...state, status: null };

        default:
            return state;
    }
}
