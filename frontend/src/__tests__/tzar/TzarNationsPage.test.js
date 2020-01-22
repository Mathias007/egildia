import React from "react";
import renderer from "react-test-renderer";
import TzarNationsPage from "../../pages/tzar/TzarNationsPage";

describe("TzarNationsPage test", () => {
    it("TzarNationsPage should match snapshot", () => {
        const component = renderer.create(<TzarNationsPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
