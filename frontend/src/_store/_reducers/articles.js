import eventStatuses from "../../_config/eventStatuses";

const {
    // USERLIST_LOADED,
    ARTICLE_ADDED,
    AUTHENTICATION_ERROR,
    ARTICLE_ADDING_FAILED
  } = eventStatuses.articles;

  const initialState = {
    // articlesList: {},
  };

  export default function articles(state = initialState, action) {
    switch (action.type) {
        case ARTICLE_ADDED:
            console.log(action.data.message);
            return {
                ...state,
                ...action.data,
                errorMessage: `${action.data.message}`
            };

        case AUTHENTICATION_ERROR:
            return {
                ...state,
                ...action.data,
                errorMessage: "Something went wrong."
            };

        case ARTICLE_ADDING_FAILED:
            console.log(action.data);
            return {
                ...state,
                ...action.data,
                inputMessages: action.data,
                errorMessage:
                    "The user has not been added. Please correct data implemented to a form."
            };

        default:
            return state;
    }
}