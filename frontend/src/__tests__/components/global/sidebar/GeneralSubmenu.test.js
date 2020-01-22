import React from "react";
import renderer from "react-test-renderer";
import GeneralSubmenu from "../../../../pages/global/sidebar/GeneralSubmenu";

describe("GeneralSubmenu test", () => {
    it("GeneralSubmenu should match snapshot", () => {
        const component = renderer.create(<GeneralSubmenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
