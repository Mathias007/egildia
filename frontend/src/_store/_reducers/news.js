import eventStatuses from "../../_config/eventStatuses";

const {
    NEWS_SUCCESSFULLY_LOADED,
    NEWS_NOT_FOUND,
    NEWS_LIST_LOADED,
    NEWS_ADDED,
    AUTHENTICATION_ERROR,
    NEWS_ADDING_FAILED,
    NEWS_SUCCESFULLY_EDITED,
    NEWS_EDITING_FAILED,
    NEWS_SUCCESFULLY_DELETED,
    NEWS_DELETING_FAILED
} = eventStatuses.news;

const initialState = {
    news: [],
    properNews: {},
    errorMessage: ""
};

export default function news(state = initialState, action) {
    switch (action.type) {
        case NEWS_SUCCESSFULLY_LOADED:
            console.log(action.data.news);
            return {
                ...state,
                ...action.data,
                properNews: action.data.news
            };

        case NEWS_NOT_FOUND:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case NEWS_LIST_LOADED:
            console.log(action.data.news);
            return {
                ...state,
                ...action.data,
                news: action.data.news
            };

        case NEWS_ADDED:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case AUTHENTICATION_ERROR:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: "Something went wrong."
            };

        case NEWS_ADDING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case NEWS_SUCCESFULLY_EDITED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case NEWS_EDITING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case NEWS_SUCCESFULLY_DELETED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        case NEWS_DELETING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                errorMessage: action.data.message
            };

        default:
            return state;
    }
}
