import React from "react";
import renderer from "react-test-renderer";
import TzarUnitsTable from "../../../pages/tzar/data/TzarUnitsTable";

describe("TzarUnitsTable test", () => {
    it("TzarUnitsTable should match snapshot", () => {
        const component = renderer.create(<TzarUnitsTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
