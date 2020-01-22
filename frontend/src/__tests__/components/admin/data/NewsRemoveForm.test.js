import React from "react";
import renderer from "react-test-renderer";
import NewsRemoveForm from "../../../../pages/admin/data/NewsRemoveForm";

describe("NewsRemoveForm test", () => {
    it("NewsRemoveForm should match snapshot", () => {
        const component = renderer.create(<NewsRemoveForm />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
