import { combineReducers } from "redux";
import whiteboardReducer from "./whiteboard";

export default combineReducers({
	whiteboard: whiteboardReducer
});