import React from "react";
import renderer from "react-test-renderer";
import Success from "../../../pages/errors/Success";

describe("Success test", () => {
    it("Success should match snapshot", () => {
        const component = renderer.create(<Success />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
