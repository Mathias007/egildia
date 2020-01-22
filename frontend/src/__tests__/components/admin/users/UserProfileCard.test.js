import React from "react";
import renderer from "react-test-renderer";
import UserProfileCard from "../../../../pages/admin/users/UserProfileCard";

describe("UserProfileCard test", () => {
    it("UserProfileCard should match snapshot", () => {
        const component = renderer.create(<UserProfileCard />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
