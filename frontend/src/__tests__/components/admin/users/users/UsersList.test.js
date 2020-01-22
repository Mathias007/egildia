import React from "react";
import renderer from "react-test-renderer";
import UsersList from "../../../../../pages/admin/users/UsersList";

describe("UsersList test", () => {
    it("UsersList should match snapshot", () => {
        const component = renderer.create(<UsersList />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
