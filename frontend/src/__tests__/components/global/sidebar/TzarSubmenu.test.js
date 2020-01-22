import React from "react";
import renderer from "react-test-renderer";
import TzarSubmenu from "../../../../pages/global/sidebar/TzarSubmenu";

describe("TzarSubmenu test", () => {
    it("TzarSubmenu should match snapshot", () => {
        const component = renderer.create(<TzarSubmenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
