import React from "react";
import renderer from "react-test-renderer";
import NewsSingleCard from "../../../../pages/admin/news/NewsSingleCard";

describe("NewsSingleCardtest", () => {
    it("NewsSingleCardshould match snapshot", () => {
        const component = renderer.create(<NewsSingleCard />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
