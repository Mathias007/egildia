import React from "react";
import renderer from "react-test-renderer";
import FooterComponent from "../../../../pages/global/FooterComponent";

describe("FooterComponent test", () => {
    it("FooterComponent should match snapshot", () => {
        const component = renderer.create(<FooterComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
