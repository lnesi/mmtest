import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Seat from "./Seat";
import Controls from "./Controls";

class Seats extends React.Component {
	onClickSeat(id) {
		this.props.seat(id);
	}

	renderSeat(key) {
		const seat = this.props.seats[key];
		return (
			<li key={key}>
				<Seat
					id={key}
					{...seat}
					onClickSeat={this.onClickSeat.bind(this)}
					canvasOnline={this.props.online}
				/>
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
				<Controls {...this.props} />
			</div>
		);
	}
}
function mapStateToProps({ whiteboard }) {
	return whiteboard;
}
export default connect(mapStateToProps, actions)(Seats);