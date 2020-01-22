import React from "react";
import renderer from "react-test-renderer";
import KnightsUnitsTable from "../../../pages/knights/data/KnightsUnitsTable";

describe("KnightsUnitsTable test", () => {
    it("KnightsUnitsTable should match snapshot", () => {
        const component = renderer.create(<KnightsUnitsTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
