import React, { Component } from 'react';

class Mon extends Component {
	render() {
		return (
			<div>
				I am {this.props.match.params.mon}
			</div>
		);
	}
}

export default Mon;
