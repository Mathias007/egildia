// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import HeaderMenu from "../../../HeaderMenu";

describe("HeaderMenu test", () => {
    it("HeaderMenu should match snapshot", () => {
        const component = renderer.create(<HeaderMenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
