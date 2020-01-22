import React from "react";
import renderer from "react-test-renderer";
import TzarTechnologiesPage from "../../pages/tzar/TzarTechnologiesPage";

describe("TzarTechnologiesPage test", () => {
    it("TzarTechnologiesPage should match snapshot", () => {
        const component = renderer.create(<TzarTechnologiesPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
