// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import KnightsSubmenu from "../../../KnightsSubmenu";

describe("KnightsSubmenu test", () => {
    it("KnightsSubmenu should match snapshot", () => {
        const component = renderer.create(<KnightsSubmenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
