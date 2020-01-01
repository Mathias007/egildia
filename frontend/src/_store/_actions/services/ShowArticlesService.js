import address from "../../../_config/address";

const { API_URL, ARTICLES, LIST } = address;

const fetchArticlesList = dispatchArticlesListLoaded => {
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  };

  fetch(`${API_URL}${ARTICLES}/${LIST}`, options)
    .then(res => {
      return res.json();
    })
    .then(articles => {
      return dispatchArticlesListLoaded(articles);
    });
};

export default fetchArticlesList;
