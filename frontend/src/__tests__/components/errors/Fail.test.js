import React from "react";
import renderer from "react-test-renderer";
import Fail from "../../../pages/errors/Fail";

describe("Fail test", () => {
    it("Fail should match snapshot", () => {
        const component = renderer.create(<Fail />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
