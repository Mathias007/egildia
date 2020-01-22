import React from "react";
import renderer from "react-test-renderer";
import ArticleRemover from "../../../../pages/admin/articles/ArticleRemover";

describe("ArticleRemover test", () => {
    it("ArticleRemover should match snapshot", () => {
        const component = renderer.create(<ArticleRemover />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
