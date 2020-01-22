import React from "react";
import renderer from "react-test-renderer";
import HeaderComponent from "../../../../pages/global/HeaderComponent";

describe("HeaderComponent test", () => {
    it("HeaderComponent should match snapshot", () => {
        const component = renderer.create(<HeaderComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
