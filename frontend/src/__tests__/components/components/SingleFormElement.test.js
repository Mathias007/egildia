import React from "react";
import renderer from "react-test-renderer";
import SingleFormElement from "../../../pages/components/SingleFormElement";

describe("SingleFormElement test", () => {
    it("SingleFormElement should match snapshot", () => {
        const component = renderer.create(<SingleFormElement />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
