// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import HeaderLogo from "../../../HeaderLogo";

describe("HeaderLogo test", () => {
    it("HeaderLogo should match snapshot", () => {
        const component = renderer.create(<HeaderLogo />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
