import React from "react";
import renderer from "react-test-renderer";
import RegistrationPage from "../../../pages/general/RegistrationPage";

describe("generalRegistrationPage test", () => {
    it("generalRegistrationPage should match snapshot", () => {
        const component = renderer.create(<RegistrationPage />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
