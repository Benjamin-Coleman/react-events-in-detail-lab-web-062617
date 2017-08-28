import React from 'react';

export default class CoordinatesButton extends React.Component {
	constructor(props){
		super()

		this.getCoordinates = this.getCoordinates.bind(this)
	}

	getCoordinates = (event) => {
		let coordinates = [event.pageX, event.pageY];
		this.props.onReceiveCoordinates(coordinates)
	}

	render() {
		return (
			<button onClick={this.getCoordinates}>Click me</button>
			)
	}
}