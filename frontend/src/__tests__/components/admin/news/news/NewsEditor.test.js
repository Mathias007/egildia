import React from "react";
import renderer from "react-test-renderer";
import NewsEditor from "../../../../../pages/admin/news/NewsEditor";

describe("NewsEditor test", () => {
    it("NewsEditor should match snapshot", () => {
        const component = renderer.create(<NewsEditor />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
