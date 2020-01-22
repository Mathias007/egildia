import React from "react";
import renderer from "react-test-renderer";
import ArticlesList from "../../../../pages/admin/articles/ArticlesList";

describe("ArticlesList test", () => {
    it("ArticlesList should match snapshot", () => {
        const component = renderer.create(<ArticlesList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
