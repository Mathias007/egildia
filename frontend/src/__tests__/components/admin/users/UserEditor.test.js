import React from "react";
import renderer from "react-test-renderer";
import UserEditor from "../../../../pages/admin/users/UserEditor";

describe("UserEditor test", () => {
    it("UserEditor should match snapshot", () => {
        const component = renderer.create(<UserEditor />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
