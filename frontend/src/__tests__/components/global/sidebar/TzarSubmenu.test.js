// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import TzarSubmenu from "../../../TzarSubmenu";

describe("TzarSubmenu test", () => {
    it("TzarSubmenu should match snapshot", () => {
        const component = renderer.create(<TzarSubmenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
