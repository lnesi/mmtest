import React from "react";
import { shallow } from "enzyme";

import App from "../App";
import Seats from "../Seats";
import Whiteboard from "../Whiteboard";


describe("App Component", () => {
	let component;
	
	beforeEach(()=>{
		component = shallow(<App />);
	});
	
	it("has Seats box", () => {
		expect(component.find(Seats).length).toEqual(1);
	});

	it("has Whiteboard", () => {
		expect(component.find(Whiteboard).length).toEqual(1);
	});
});