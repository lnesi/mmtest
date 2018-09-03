import {
	WHITEBOARD_UPDATE,
	WHITEBOARD_SEAT,
	WHITEBOARD_LEAVE
} from "../actions/types";

export default function(
	state = { seats: [], currentUser: null, online: false },
	action
) {
	switch (action.type) {
		case WHITEBOARD_UPDATE:
			return { ...state, ...action.payload };
		case WHITEBOARD_SEAT:
			return { ...state, currentUser: action.payload, online: true };
		case WHITEBOARD_LEAVE:
			return { ...state, currentUser: null, online: false };
		default:
			return state;
	}
}