import React from "react";
import renderer from "react-test-renderer";
import PageHeaderComponent from "../../../../pages/components/PageHeaderComponent";

describe("PageHeaderComponent test", () => {
    it("PageHeaderComponent should match snapshot", () => {
        const component = renderer.create(<PageHeaderComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
