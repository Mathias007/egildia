import React from "react";
import renderer from "react-test-renderer";
import KnightsBuildingsTable from "../../../pages/knights/data/KnightsBuildingsTable";

describe("KnightsBuildingsTable test", () => {
    it("KnightsBuildingsTable should match snapshot", () => {
        const component = renderer.create(<KnightsBuildingsTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
