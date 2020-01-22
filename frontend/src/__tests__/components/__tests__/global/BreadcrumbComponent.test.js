// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbComponent from "../../BreadcrumbComponent";

describe("BreadcrumbComponent test", () => {
    it("BreadcrumbComponent should match snapshot", () => {
        const component = renderer.create(<BreadcrumbComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
