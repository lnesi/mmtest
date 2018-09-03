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
					<button
						className="constrols__btn-leave"
						onClick={this.onClickLeave.bind(this)}
					>
						Leave Seat
					</button>
					<button
						className="constrols__btn-clear"
						onClick={this.onClickClear.bind(this)}
					>
						Clear
					</button>
				</div>
			);
		}else{
			return (<div className="controls"/>);
		}
		
	}
}

export default Controls;