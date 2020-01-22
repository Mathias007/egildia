import React from "react";
import renderer from "react-test-renderer";
import Forbidden from "../../../pages/errors/Forbidden";

describe("Forbidden test", () => {
    it("Forbidden should match snapshot", () => {
        const component = renderer.create(<Forbidden />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
