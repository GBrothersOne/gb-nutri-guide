import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GBHeightInput extends Component {

	static propTypes = {
		height: PropTypes.string.isRequired,
		onHeightChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
	}

	static defaultProps = {
		placeholder: 'Height (cm)',
	}

	handleChange = ({ target: { value} }) => {
		value = value
			.replace(/\D+/, '')
			.slice(0, 3)
		this.props.onHeightChange(value)
	}

	render() {
		const { placeholder, height } = this.props
		return (
			<div className='verticalContainer'>
				<input
					type='number'
					className='GBWriteInput'
					placeholder={placeholder}
					value={height}
					onChange={this.handleChange} />
			</div>
		)
	}
}

export default GBHeightInput