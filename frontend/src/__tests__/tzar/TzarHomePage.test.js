import React from "react";
import renderer from "react-test-renderer";
import TzarHomePage from "../../pages/tzar/TzarHomePage";

describe("TzarHomePage test", () => {
    it("TzarHomePage should match snapshot", () => {
        const component = renderer.create(<TzarHomePage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
