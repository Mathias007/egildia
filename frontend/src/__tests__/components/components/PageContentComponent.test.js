import React from "react";
import renderer from "react-test-renderer";
import PageContentComponent from "../../../pages/components/PageContentComponent";

describe("PageContentComponent test", () => {
    it("PageContentComponent should match snapshot", () => {
        const component = renderer.create(<PageContentComponent />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
