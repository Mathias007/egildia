import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "../../../pages/general/LoginPage";

describe("LoginPage test", () => {
    it("LoginPage should match snapshot", () => {
        const component = renderer.create(<LoginPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
