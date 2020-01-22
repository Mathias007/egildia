import React from "react";
import renderer from "react-test-renderer";
import HeaderMenu from "../../../../pages/global/header/HeaderMenu";

describe("HeaderMenu test", () => {
    it("HeaderMenu should match snapshot", () => {
        const component = renderer.create(<HeaderMenu />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
