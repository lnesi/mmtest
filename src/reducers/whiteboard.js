import {
	WHITEBOARD_UPDATE,
	WHITEBOARD_SEAT,
	WHITEBOARD_LEAVE
} from "../actions/types";

export default function(state = { seats: [], currentUser: null }, action) {
	switch (action.type) {
		case WHITEBOARD_UPDATE:
			return { ...state, ...action.payload };
		//return [...state, action.payload];
		case WHITEBOARD_SEAT:
			return { ...state, currentUser: action.payload };

		default:
			return state;
	}
}