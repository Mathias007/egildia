// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import AdminSubmenu from "../../../pages/global/sidebar/AdminSubmenu";

describe("AdminSubmenu test", () => {
    it("AdminSubmenu should match snapshot", () => {
        const component = renderer.create(<AdminSubmenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
