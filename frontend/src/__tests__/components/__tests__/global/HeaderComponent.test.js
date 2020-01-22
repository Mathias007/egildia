// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import HeaderComponent from "../../HeaderComponent";

describe("HeaderComponent test", () => {
    it("HeaderComponent should match snapshot", () => {
        const component = renderer.create(<HeaderComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
