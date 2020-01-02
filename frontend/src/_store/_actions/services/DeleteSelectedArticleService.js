import statuses from "../../../_config/statuses";
import address from "../../../_config/address";

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = statuses;

const { API_URL, ARTICLES, DELETE } = address;

const deleteArticle = (
    id,
    dispatchArticleDeleted,
    dispatchArticleAuthError,
    dispatchArticleDeletingFailed
) => {
    const options = {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            id
        })
    };

    fetch(`${API_URL}${ARTICLES}/${DELETE}`, options)
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
                dispatchArticleDeleted(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleDeletingFailed(response);
            }
        });
};

export default deleteArticle;
