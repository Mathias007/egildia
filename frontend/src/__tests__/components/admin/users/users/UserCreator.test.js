import React from "react";
import renderer from "react-test-renderer";
import UserCreator from "../../../../../pages/admin/users/UserCreator";

describe("UserCreator test", () => {
    it("UserCreator should match snapshot", () => {
        const component = renderer.create(<UserCreator />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
