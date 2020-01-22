import React from "react";
import renderer from "react-test-renderer";
import ArticlesTable from "../../../../../pages/admin/data/ArticlesTable";

describe("ArticlesTable test", () => {
    it("ArticlesTable should match snapshot", () => {
        const component = renderer.create(<ArticlesTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
