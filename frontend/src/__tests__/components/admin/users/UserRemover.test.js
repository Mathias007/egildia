import React from "react";
import renderer from "react-test-renderer";
import UserRemover from "../../../../pages/admin/users/UserRemover";

describe("UserRemover test", () => {
    it("UserRemover should match snapshot", () => {
        const component = renderer.create(<UserRemover />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
