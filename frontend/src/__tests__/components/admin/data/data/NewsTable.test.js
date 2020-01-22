import React from "react";
import renderer from "react-test-renderer";
import NewsTable from "../../../../../pages/admin/data/NewsTable";

describe("NewsTable test", () => {
    it("NewsTable should match snapshot", () => {
        const component = renderer.create(<NewsTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
