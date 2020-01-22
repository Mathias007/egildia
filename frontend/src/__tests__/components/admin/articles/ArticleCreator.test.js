import React from "react";
import renderer from "react-test-renderer";
import ArticleCreator from "../../../../pages/admin/articles/ArticleCreator";

describe("ArticleCreator test", () => {
    it("ArticleCreator should match snapshot", () => {
        const component = renderer.create(<ArticleCreator />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
