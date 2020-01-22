import React from "react";
import renderer from "react-test-renderer";
import KnightsUnitsPage from "../../pages/knights/KnightsUnitsPage";

describe("KnightsUnitsPage test", () => {
    it("KnightsUnitsPage should match snapshot", () => {
        const component = renderer.create(<KnightsUnitsPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
