import React from "react";
import renderer from "react-test-renderer";
import NotFound from "../../../pages/errors/NotFound";

describe("NotFound test", () => {
    it("NotFound should match snapshot", () => {
        const component = renderer.create(<NotFound />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
