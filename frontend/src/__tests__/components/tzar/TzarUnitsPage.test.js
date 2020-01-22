import React from "react";
import renderer from "react-test-renderer";
import TzarUnitsPage from "../../../pages/tzar/TzarUnitsPage";

describe("TzarUnitsPage test", () => {
    it("TzarUnitsPage should match snapshot", () => {
        const component = renderer.create(<TzarUnitsPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
