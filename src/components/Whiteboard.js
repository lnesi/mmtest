import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Whiteboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawing: false,
			current: { x: 0, y: 0 },
			color: "black"
		};
		this.canvas = React.createRef();
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
		this.setState({
			drawing: true,
			current: { x: clientX, y: clientY }
		});
	}
	onMouseUp({ clientX, clientY }) {
		if (!this.state.drawing) return null;
		this.setState({ drawing: false });
		this.drawLine(clientX, clientY, true);
	}

	onMouseMove({ clientX, clientY }) {
		if (!this.state.drawing) return null;

		this.drawLine(clientX, clientY, true);
		this.setState({
			current: { x: clientX, y: clientY }
		});
	}

	drawLine(x1, y1, dispatch) {
		const context = this.canvas.current.getContext("2d");
		context.beginPath();
		context.moveTo(this.state.current.x, this.state.current.y);
		context.lineTo(x1, y1);
		context.strokeStyle = this.state.color;
		context.lineWidth = 2;
		context.stroke();
		context.closePath();
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
	return { whiteboard };
}
export default connect(mapStateToProps, actions)(Whiteboard);