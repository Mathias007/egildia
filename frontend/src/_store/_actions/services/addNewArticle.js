import statuses from "../../../_config/statuses";
import address from "../../../_config/address";
import { addNewArticle } from "../articles";

const {
  STATUS_OK,
  STATUS_UNAUTHORIZED,
  STATUS_FORBIDDEN,
  INTERNAL_ERROR
} = statuses;

const { API_URL, ARTICLES, ADD } = address;

const AddNewUser = (
  destiny,
  title,
  content,
  author,
  date,
  dispatchArticleAdded,
  dispatchArticleAuthError,
  dispatchArticleAddingFailed
) => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ destiny, title, content, author, date })
  };

  fetch(`${API_URL}${ARTICLES}/${ADD}`, options)
    .then(response => {
      if (response.status < INTERNAL_ERROR) {
        return response.json().then(data => {
          return { status: response.status, data };
        });
      } else {
        console.log("Server Error!");
        throw response;
      }
    })
    .then(response => {
      console.log(response);
      if (response.status === STATUS_OK) {
        dispatchArticleAdded(response);
      } else if (
        response.status === STATUS_FORBIDDEN ||
        response.status === STATUS_UNAUTHORIZED
      ) {
        return dispatchArticleAuthError(response);
      } else {
        return dispatchArticleAddingFailed(response);
      }
    });
};

export default addNewArticle;
