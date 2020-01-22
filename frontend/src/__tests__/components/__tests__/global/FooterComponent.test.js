// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import FooterComponent from "../../FooterComponent";

describe("FooterComponent test", () => {
    it("FooterComponent should match snapshot", () => {
        const component = renderer.create(<FooterComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
