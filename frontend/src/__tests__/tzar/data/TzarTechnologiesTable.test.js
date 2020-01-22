import React from "react";
import renderer from "react-test-renderer";
import TzarTechnologiesTable from "../../../pages/tzar/data/TzarTechnologiesTable";

describe("TzarTechnologiesTable test", () => {
    it("TzarTechnologiesTable should match snapshot", () => {
        const component = renderer.create(<TzarTechnologiesTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
