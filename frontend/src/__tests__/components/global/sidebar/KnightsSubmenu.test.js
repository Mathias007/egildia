import React from "react";
import renderer from "react-test-renderer";
import KnightsSubmenu from "../../../../pages/global/sidebar/KnightsSubmenu";

describe("KnightsSubmenu test", () => {
    it("KnightsSubmenu should match snapshot", () => {
        const component = renderer.create(<KnightsSubmenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
