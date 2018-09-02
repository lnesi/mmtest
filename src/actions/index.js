import { WHITEBOARD_DRAW, WHITEBOARD_SEAT, WHITEBOARD_LEAVE } from "./types";

export function drawLine(id, x0, y0, x1, y1, color) {
	const timestamp = new Date().getTime();
	if (id) {
		window.db
			.ref("whiteboard/seats/" + id + "/lines/" + timestamp)
			.set({ x0, y0, x1, y1 });
	}

	return { type: WHITEBOARD_DRAW };
}

export function seat(id) {
	window.db.ref("whiteboard/seats/" + id).update({ online: true });
	return { type: WHITEBOARD_SEAT, payload: id };
}

export function leave(id) {
	window.db.ref("whiteboard/seats/" + id).update({ online: false });
	return { type: WHITEBOARD_LEAVE };
}

export function clear(id) {
	window.db.ref("whiteboard/seats/" + id).update({ lines: [] });
}