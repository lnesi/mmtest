import React from "react";
import { mount } from "enzyme";
import store from "../../store";
import Seats from '../Seats';

describe("Seats Component", () => {
    let component;

    beforeEach(() => {
        component = mount(
            <Seats
            store={store}
            />
        );
    });
    it("renders container",()=>{
        expect(component.find(".seats").length).toEqual(1);
    });

    it("renders list",()=>{
        expect(component.find("ul").length).toEqual(1);
    });
});
