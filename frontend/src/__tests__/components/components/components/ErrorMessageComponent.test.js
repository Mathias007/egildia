import React from "react";
import renderer from "react-test-renderer";
import ErrorMessageComponent from "../../../../pages/components/ErrorMessageComponent";

describe("ErrorMessageComponent test", () => {
    it("ErrorMessageComponent should match snapshot", () => {
        const component = renderer.create(<ErrorMessageComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
