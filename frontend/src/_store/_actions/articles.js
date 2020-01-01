import fetchArticlesList from "./services/ShowArticlesService";
import AddNewArticleService from "./services/AddNewArticleService";
// import editArticle from "./services/editArticle";
// import deleteArticle from "./services/deleteArticle";

import eventStatuses from "../../_config/eventStatuses";

const {
  ARTS_LIST_LOADED,
  ARTICLE_ADDED,
  AUTHENTICATION_ERROR,
  ARTICLE_ADDING_FAILED,
} = eventStatuses.articles;

export const showArticlesList = () => {
  return (dispatch, getState) => {
    const dispatchArticlesListLoaded = function(articles) {
      dispatch({
        type: ARTS_LIST_LOADED,
        data: articles
      });
    };

    return fetchArticlesList(dispatchArticlesListLoaded);
  };
};

export const addNewArticle = (
  allocationKey,
  title,
  content,
  author,
  date
) => {
  return (dispatch, getState) => {
    const dispatchArticleAdded = function(response) {
      dispatch({
        type: ARTICLE_ADDED,
        data: response.data
      });
      return response.data;
    };

    const dispatchArticleAuthError = function(response) {
      dispatch({ type: AUTHENTICATION_ERROR, data: response.data });
      throw response.data;
    };

    const dispatchArticleAddingFailed = function(response) {
      dispatch({ type: ARTICLE_ADDING_FAILED, data: response.data });
      throw response.data;
    };

    return AddNewArticleService(
      allocationKey,
      title,
      content,
      author,
      date,
      dispatchArticleAdded,
      dispatchArticleAuthError,
      dispatchArticleAddingFailed
    );
  };
};

// export const deleteExistingArticle = destiny => {
//   return (dispatch, getState) => {
//     return deleteUser(destiny);
//   };
// };
