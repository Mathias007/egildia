import React from "react";
import renderer from "react-test-renderer";
import KnightsHomePage from "../../pages/knights/KnightsHomePage";

describe("KnightsHomePage test", () => {
    it("KnightsHomePage should match snapshot", () => {
        const component = renderer.create(<KnightsHomePage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
