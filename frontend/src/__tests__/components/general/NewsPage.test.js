import React from "react";
import renderer from "react-test-renderer";
import NewsPage from "../../../pages/general/NewsPage";

describe("generalNewsPage test", () => {
    it("generalNewsPage should match snapshot", () => {
        const component = renderer.create(<NewsPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
