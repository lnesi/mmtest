import React from "react";

import Whiteboard from "./Whiteboard";
import Seats from './Seats';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Media Molecule Test</h1>
				<Seats />
				<Whiteboard />

			</div>
		);
	}
}

export default App;