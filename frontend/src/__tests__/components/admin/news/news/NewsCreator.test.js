import React from "react";
import renderer from "react-test-renderer";
import NewsCreator from "../../../../../pages/admin/news/NewsCreator";

describe("NewsCreator test", () => {
    it("NewsCreator should match snapshot", () => {
        const component = renderer.create(<NewsCreator />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
