import React from "react";
import { mount } from "enzyme";
import store from "../../store";
import Whiteboard from "../Whiteboard";


describe("Whiteboard Component", () => {
	let component;
	
	beforeEach(()=>{
		component = mount(<Whiteboard store={store}/>);
	});
	it("has canvas", () => {
		expect(component.find(".whiteboard__canvas").length).toEqual(1);
	});

	
});