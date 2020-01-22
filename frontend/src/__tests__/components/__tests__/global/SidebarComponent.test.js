// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import SidebarComponent from "../../SidebarComponent";

describe("SidebarComponent test", () => {
    it("SidebarComponent should match snapshot", () => {
        const component = renderer.create(<SidebarComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
