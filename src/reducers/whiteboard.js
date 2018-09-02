import { WHITEBOARD_DRAW } from "../actions/types";

export default function(state={}, action) {
	switch (action.type) {
		case WHITEBOARD_DRAW:
			return state;
		default:
			return state;
	}
}