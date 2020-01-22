import React from "react";
import renderer from "react-test-renderer";
import HeaderLogo from "../../../../pages/global/header/HeaderLogo";

describe("HeaderLogo test", () => {
    it("HeaderLogo should match snapshot", () => {
        const component = renderer.create(<HeaderLogo />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
