import statuses from "../../../_config/statuses";
import address from "../../../_config/address";

const {
    STATUS_OK,
    STATUS_UNAUTHORIZED,
    STATUS_FORBIDDEN,
    INTERNAL_ERROR
} = statuses;

const { API_URL, ARTICLES, EDIT } = address;

const editArticle = (
    id,
    allocationKey,
    title,
    content,
    author,
    lastModified,
    dispatchArticleEdited,
    dispatchArticleAuthError,
    dispatchArticleEditingFailed
) => {
    const options = {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            id,
            allocationKey,
            title,
            content,
            author,
            lastModified
        })
    };

    fetch(`${API_URL}${ARTICLES}/${EDIT}`, options)
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
                dispatchArticleEdited(response);
            } else if (
                response.status === STATUS_FORBIDDEN ||
                response.status === STATUS_UNAUTHORIZED
            ) {
                return dispatchArticleAuthError(response);
            } else {
                return dispatchArticleEditingFailed(response);
            }
        });
};

export default editArticle;
