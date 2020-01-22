import eventStatuses from "../../_config/eventStatuses";
import articles from "../../_store/_reducers/articles";

const {
    ARTICLE_SUCCESSFULLY_LOADED,
    ARTICLE_NOT_FOUND,
    ARTS_LIST_LOADED,
    ARTS_LIST_NOT_FOUND,
    ARTICLE_ADDED,
    ARTICLE_ADDING_FAILED,
    ARTICLE_SUCCESFULLY_EDITED,
    ARTICLE_EDITING_FAILED,
    ARTICLE_SUCCESFULLY_DELETED,
    ARTICLE_DELETING_FAILED,
    AUTHENTICATION_ERROR
} = eventStatuses.articles;

const initialState = {
    articles: [],
    properArticle: {},
    errorMessage: ""
};

describe("test articles reducer", () => {
    const articlesList = {
        message: "Pozytywna wiadomość z serwera!",
        articles: [
            {
                _id: "1111-2222-3333-4444",
                allocationKey: "test-article",
                title: "Artykuł testowy",
                content: "Zawartość artykułu testowego",
                author: "tester",
                date: "01-01-2020"
            }
        ]
    };

    const singleArticle = {
        message: "Okuratna wiadomość z serwera!",
        article: {
            _id: "1111-2222-3333-4444",
            allocationKey: "test-article",
            title: "Artykuł testowy",
            content: "Zawartość artykułu testowego",
            author: "tester",
            date: "01-01-2020"
        }
    };

    const serverMessage = { message: "Ważna wiadomość z serwera!" };

    it("should return the initial state", () => {
        expect(articles(undefined, {})).toEqual(initialState);
    });

    it("should load articles list", () => {
        const action = { type: ARTS_LIST_LOADED, data: articlesList };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about articles list's not finding", () => {
        const action = { type: ARTS_LIST_NOT_FOUND, data: serverMessage };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should load a single article", () => {
        const action = {
            type: ARTICLE_SUCCESSFULLY_LOADED,
            data: singleArticle
        };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about single article's not finding", () => {
        const action = { type: ARTICLE_NOT_FOUND, data: serverMessage };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about adding article to database", () => {
        const action = { type: ARTICLE_ADDED, data: serverMessage };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about article's adding fail", () => {
        const action = { type: ARTICLE_ADDING_FAILED, data: serverMessage };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about modifying article in database", () => {
        const action = {
            type: ARTICLE_SUCCESFULLY_EDITED,
            data: serverMessage
        };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about article's modifying fail", () => {
        const action = { type: ARTICLE_EDITING_FAILED, data: serverMessage };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about removing article from database", () => {
        const action = {
            type: ARTICLE_SUCCESFULLY_DELETED,
            data: serverMessage
        };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about article's removing fail", () => {
        const action = { type: ARTICLE_DELETING_FAILED, data: serverMessage };
        expect(articles(initialState, action)).toMatchSnapshot();
    });

    it("should get message about a problem with authentication", () => {
        const action = { type: AUTHENTICATION_ERROR, data: serverMessage };
        expect(articles(initialState, action)).toMatchSnapshot();
    });
});
