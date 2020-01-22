import React from "react";
import renderer from "react-test-renderer";
import NewsList from "../../../../pages/admin/news/NewsList";

describe("NewsList test", () => {
    it("NewsList should match snapshot", () => {
        const component = renderer.create(<NewsList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
