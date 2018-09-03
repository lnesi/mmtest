import React from "react";

class Controls extends React.Component {
	onClickLeave(e) {
		e.preventDefault();
		this.props.leave(this.props.currentUser);
	}

	onClickClear(e) {
		e.preventDefault();
		this.props.clear(this.props.currentUser);
	}

	render() {
		if (this.props.online) {
			return (
				<div className="controls">
					<button onClick={this.onClickLeave.bind(this)}>
						Leave Seat
					</button>
					<button onClick={this.onClickClear.bind(this)}>
						Clear
					</button>
				</div>
			);
		}
		return "";
	}
}

export default Controls;