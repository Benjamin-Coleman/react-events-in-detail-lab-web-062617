import React from 'react';

export default class CoordinatesButton extends React.Component {
	constructor(props){
		super()

		this.holdClick = this.holdClick.bind(this)
	}

	holdClick = (event) => {
		let persistedEvent = event
		setTimeout(() => {
			this.props.onDelayedClick(persistedEvent)
		}, this.props.delay)
		event.persist()
	}

	render(){
		return (
			<button onClick={this.holdClick} >Delayed Click</button>
			)
	}
}