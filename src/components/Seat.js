import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Seat extends React.Component {
	onClickLeave() {
		this.props.leave(this.props.id);
	}

	onClickSeat() {
		this.props.seat(this.props.id);
	}

	onClickClear() {
		this.props.clear(this.props.id);
	}

	renderControls() {
		if (!this.props.online && !this.props.current) {
			return (
				<div>
					<button onClick={this.onClickSeat.bind(this)}>Seat</button>
				</div>
			);
		}
	}
	render() {
		return (
			<div className="seat">
				<span
					className="seat__user-color"
					style={{ backgroundColor: this.props.color }}
				/>
				<span className="seat__user-name">{this.props.userName}</span>
				<sup className="seat__user-status">
					({this.props.online ? "online" : "available"})
				</sup>
				<br />

				{this.renderControls()}
			</div>
		);
	}
}

export default connect(null, actions)(Seat);