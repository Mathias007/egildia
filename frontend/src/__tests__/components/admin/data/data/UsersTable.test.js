import React from "react";
import renderer from "react-test-renderer";
import UsersTable from "../../../../../pages/admin/data/UsersTable";

describe("UsersTable test", () => {
    it("UsersTable should match snapshot", () => {
        const component = renderer.create(<UsersTable />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
