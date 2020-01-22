import React from "react";
import renderer from "react-test-renderer";
import KnightsBuildingsPage from "../../../pages/knights/KnightsBuildingsPage";

describe("KnightsBuildingsPage test", () => {
    it("KnightsBuildingsPage should match snapshot", () => {
        const component = renderer.create(<KnightsBuildingsPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
