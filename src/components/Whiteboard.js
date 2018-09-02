import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Whiteboard extends React.Component {
	static drawLine(context, w, h, color, { x0, y0, x1, y1 }) {
		context.beginPath();
		context.moveTo(x0 * w, y0 * h);
		context.lineTo(x1 * w, y1 * h);
		context.strokeStyle = color;
		context.lineWidth = 2;
		context.stroke();
		context.closePath();
	}

	static getDerivedStateFromProps(props, state) {
		if (state.canvas.current) {
			const context = state.canvas.current.getContext("2d");
			const { width, height } = state.canvas.current;
			context.clearRect(0, 0, width, height);
			props.seats.forEach(seat => {
				if (seat.lines) {
					Object.keys(seat.lines).forEach(key => {
						Whiteboard.drawLine(
							context,
							width,
							height,
							seat.color,
							seat.lines[key]
						);
					});
				}
			});
		}

		return null;
	}

	constructor(props) {
		super(props);
		this.state = {
			drawing: false,
			current: { x: 0, y: 0 },
			color: "black",
			canvas: null
		};
		this.canvas = React.createRef();
		this.state.canvas = this.canvas;
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onResize = this.onResize.bind(this);
	}
	componentDidMount() {
		const canvas = this.canvas.current;
		canvas.addEventListener("mousedown", this.onMouseDown, false);
		canvas.addEventListener("mouseup", this.onMouseUp, false);
		canvas.addEventListener("mouseout", this.onMouseUp, false);
		canvas.addEventListener("mousemove", this.onMouseMove, false);
		window.addEventListener("resize", this.onResize, false);
		this.onResize();
	}

	componentWillUnmount() {
		const canvas = this.canvas.current;
		canvas.removeEventListener("mousedown", this.onMouseDown, false);
		canvas.removeEventListener("mouseup", this.onMouseUp, false);
		canvas.removeEventListener("mouseout", this.onMouseMove, false);
		canvas.removeEventListener("mousemove", this.onMouseMove, false);
	}

	onMouseDown({ clientX, clientY }) {
		if (this.props.online) {
			this.setState({
				drawing: true,
				current: { x: clientX, y: clientY }
			});
		}
	}
	onMouseUp({ clientX, clientY }) {
		if (!this.state.drawing || !this.props.online) return null;
		this.setState({ drawing: false });
		const { x, y } = this.state.current;
		const { width, height } = this.canvas.current;
		this.props.drawLine(
			this.props.currentUser,
			x / width,
			y / height,
			clientX / width,
			clientY / height
		);
	}

	onMouseMove({ clientX, clientY }) {
		if (!this.state.drawing) return null;
		const { x, y } = this.state.current;
		const { width, height } = this.canvas.current;
		this.props.drawLine(
			this.props.currentUser,
			x / width,
			y / height,
			clientX / width,
			clientY / height
		);
		this.setState({
			current: { x: clientX, y: clientY }
		});
	}

	onResize(event) {
		const canvas = this.canvas.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	render() {
		return (
			<div className="whiteboad">
				<canvas className="whiteboard__canvas" ref={this.canvas} />
			</div>
		);
	}
}

function mapStateToProps({ whiteboard }) {
	return { ...whiteboard };
}
export default connect(mapStateToProps, actions)(Whiteboard);