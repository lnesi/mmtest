import React from "react";
import { shallow } from "enzyme";

import Controls from "../Controls";

describe("Controls Component", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Controls online={true} />);
    });

    it("renders container", () => {
        expect(component.find(".controls").length).toEqual(1);
    });

    it("has leave button", () => {
        expect(component.find("button.constrols__btn-leave").length).toEqual(1);
    });

    it("has clear button", () => {
        expect(component.find("button.constrols__btn-clear").length).toEqual(1);
    });
});