import React from "react";
import renderer from "react-test-renderer";
import Warning from "../../../pages/errors/Warning";

describe("errorsWarning test", () => {
    it("errorsWarning should match snapshot", () => {
        const component = renderer.create(<Warning />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
