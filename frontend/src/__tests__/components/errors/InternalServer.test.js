import React from "react";
import renderer from "react-test-renderer";
import InternalServer from "../../../pages/errors/InternalServer";

describe("InternalServer test", () => {
    it("InternalServer should match snapshot", () => {
        const component = renderer.create(<InternalServer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
