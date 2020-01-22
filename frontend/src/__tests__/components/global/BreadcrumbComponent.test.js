import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbComponent from "../../../pages/global/BreadcrumbComponent";

describe("BreadcrumbComponent test", () => {
    it("BreadcrumbComponent should match snapshot", () => {
        const component = renderer.create(<BreadcrumbComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
