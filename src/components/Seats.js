import React from "react";
import { connect } from "react-redux";
import Seat from "./Seat";

class Seats extends React.Component {
	renderSeat(key) {
		const seat = this.props.seats[key];
		return (
			<li key={key}>
				<Seat id={key} {...seat} current={this.props.current} />
			</li>
		);
	}

	render() {
		return (
			<div className="seats">
				<h2>Seats</h2>
				<ul>
					{this.props.seats.map((seat, index) => {
						return this.renderSeat(index);
					})}
				</ul>
			</div>
		);
	}
}
function mapStateToProps({ whiteboard }) {
	return { seats: whiteboard.seats, currentUser: whiteboard.currentUser };
}
export default connect(mapStateToProps)(Seats);