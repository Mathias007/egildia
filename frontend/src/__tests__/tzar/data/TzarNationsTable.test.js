import React from "react";
import renderer from "react-test-renderer";
import TzarNationsTable from "../../../pages/tzar/data/TzarNationsTable";

describe("TzarNationsTable test", () => {
    it("TzarNationsTable should match snapshot", () => {
        const component = renderer.create(<TzarNationsTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
