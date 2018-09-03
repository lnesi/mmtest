import React from "react";
import { shallow } from "enzyme";

import Seat from "../Seat";

describe("Seat Component", () => {
    let component;

    beforeEach(() => {
        component = shallow(
            <Seat
                color="black"
                userName="test_user"
                online={false}
                canvasOnline={false}
            />
        );
    });
    it("renders container", () => {
        expect(component.find(".seat").length).toEqual(1);
    });

    it("has btn seat", () => {
        expect(component.find(".seat__btn-seat").length).toEqual(1);
    });

    it("has online status", () => {
        expect(component.find(".seat__user-status").length).toEqual(1);
    });

    it("has online status has offline", () => {
        expect(component.find(".seat__user-status").html()).toContain("(available)");
    });

});