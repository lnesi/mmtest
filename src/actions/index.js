import { WHITEBOARD_DRAW } from "./types";

export function drawLine(x0, y0, x1, y1, color) {
	window.db
		.ref("whiteboard/lines/" + new Date().getTime())
		.set({ x0, y0, x1, y1, color });

	return { type: WHITEBOARD_DRAW, payload: { x0, y0, x1, y1, color } };
}