import React from "react";
import renderer from "react-test-renderer";
import NewsRemover from "../../../../pages/admin/news/NewsRemover";

describe("NewsRemover test", () => {
    it("NewsRemover should match snapshot", () => {
        const component = renderer.create(<NewsRemover />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
