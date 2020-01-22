import React from "react";
import renderer from "react-test-renderer";
import TzarSpellsTable from "../../../../pages/tzar/data/TzarSpellsTable";

describe("TzarSpellsTable test", () => {
    it("TzarSpellsTable should match snapshot", () => {
        const component = renderer.create(<TzarSpellsTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
