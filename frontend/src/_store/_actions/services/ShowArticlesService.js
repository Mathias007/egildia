import address from "../../../_config/address";
import eventStatuses from "../../../_config/eventStatuses";

const { API_URL, ARTICLES, SINGLE, LIST } = address;
const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = eventStatuses;

export const fetchArticlesList = dispatchArticlesListLoaded => {
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

export const getSingleArticle = (
    allocationKey,
    dispatchSingleArticleLoaded,
    dispatchArticleAuthError,
    dispatchArticleNotFound
) => {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ allocationKey })
    };

    fetch(`${API_URL}${ARTICLES}/${SINGLE}`, options)
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
                dispatchSingleArticleLoaded(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleNotFound(response);
            }
        });
};
