import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase";
import { WHITEBOARD_UPDATE } from "./actions/types";

import "./index.css";

const config = {
	apiKey: "AIzaSyBCq1CI7KdShcpwC_y2zDjBlRFmEJOwdeo",
	databaseURL: "https://mmtest-fc85e.firebaseio.com",
	projectId: "mmtest-fc85e"
};

firebase.initializeApp(config);
window.firebase = firebase;
const db = firebase.database();
window.db = db;

db.ref("whiteboard/").on("value", snapshot => {
	store.dispatch({ type: WHITEBOARD_UPDATE, payload: snapshot.val() });
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);