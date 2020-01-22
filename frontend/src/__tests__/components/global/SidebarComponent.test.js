import React from "react";
import renderer from "react-test-renderer";
import SidebarComponent from "../../../pages/global/SidebarComponent";

describe("SidebarComponent test", () => {
    it("SidebarComponent should match snapshot", () => {
        const component = renderer.create(<SidebarComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
