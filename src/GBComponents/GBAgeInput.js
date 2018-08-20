import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GBAgeInput extends Component {

	static propTypes = {
		age: PropTypes.string.isRequired,
		onAgeChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
	}

	static defaultProps = {
		placeholder: 'Age'
	}

	handleChange = ({ target: { value} }) => {
		value = value
			.replace(/\D+/, '')
			.slice(0, 3)
		this.props.onAgeChange(value)
	}

	render() {
		const { placeholder, age } = this.props
		return (
			<div className='verticalContainer'>
				<input
					type='number'
					className='GBWriteInput'
					placeholder={placeholder}
					value={age}
					onChange={this.handleChange} />
			</div>
		)
	}
}

export default GBAgeInput