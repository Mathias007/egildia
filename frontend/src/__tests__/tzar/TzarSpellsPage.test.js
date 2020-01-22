import React from "react";
import renderer from "react-test-renderer";
import TzarSpellsPage from "../../pages/tzar/TzarSpellsPage";

describe("TzarSpellsPage test", () => {
    it("TzarSpellsPage should match snapshot", () => {
        const component = renderer.create(<TzarSpellsPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
