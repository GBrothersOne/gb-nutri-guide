import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GBWeightInput extends Component {

	static propTypes = {
		weight: PropTypes.string.isRequired,
		onWeightChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
	}

	static defaultProps = {
		placeholder: 'Weight (kg)',
	}

	handleChange = ({ target: { value} }) => {
		value = value
			.replace(/\D+/, '')
			.slice(0, 3)
		this.props.onWeightChange(value)
	}

	render() {
		const { placeholder, weight } = this.props
		return (
			<div className='verticalContainer'>
				<input
					type='number'
					className='GBWriteInput'
					placeholder={placeholder}
					value={weight}
					onChange={this.handleChange} />
			</div>
		)
	}
}

export default GBWeightInput