import React from "react";
import renderer from "react-test-renderer";
import ArticleEditor from "../../../../pages/admin/articles/ArticleEditor";

describe("ArticleEditor test", () => {
    it("ArticleEditor should match snapshot", () => {
        const component = renderer.create(<ArticleEditor />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
