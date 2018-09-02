import { WHITEBOARD_DRAW } from "./types";

export function draw() {
	return { type: WHITEBOARD_DRAW, payload: {} };
}