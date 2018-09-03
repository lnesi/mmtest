import React from "react";

class Seat extends React.Component {
	renderControls() {
		if (!this.props.online && !this.props.canvasOnline) {
			return (
				<div>
					<button
						onClick={() => this.props.onClickSeat(this.props.id)}
					>
						Seat In
					</button>
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

export default Seat;