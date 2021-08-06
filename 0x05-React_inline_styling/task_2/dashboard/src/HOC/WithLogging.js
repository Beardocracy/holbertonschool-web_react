import React, { Component } from 'react';

const WithLogging = (HOComponent) => {
	const HOCname = HOComponent.displayName || HOComponent.name || 'Component';
	class WithLogging extends Component {
		constructor(props) {
			super(props);
			this.HOCname = HOCname;
		}
		componentDidMount() {
			console.log(`Component ${this.HOCname} is mounted`);
		}
		componentWillUnmount() {
			console.log(`Component ${this.HOCname} is going ot unmount`);
		}
		render () { 
			return <HOComponent />}
	}

	WithLogging.displayName = `WithLogging(${HOCname})`;
	return WithLogging;
}

export default WithLogging;