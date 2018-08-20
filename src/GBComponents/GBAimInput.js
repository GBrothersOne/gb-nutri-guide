import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GBAimInput extends Component {

	static propTypes = {
		aim: PropTypes.string.isRequired,
		onAimChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		optionCut: PropTypes.string,
		optionKeep: PropTypes.string,
		optionBulk: PropTypes.string,
	}

	static defaultProps = {
		placeholder: 'Aim',
		optionCut: 'Weight loss',
		optionKeep: 'Keeping shape',
		optionBulk: 'Muscular gain',
	}

	handleChange = (event) => {
		this.props.onAimChange(event.target.value)
	}

	render() {
		const { placeholder, optionCut, optionKeep, optionBulk, aim } = this.props
		return (
			<div className='verticalContainer'>
				<select className='GBSelectInput' value={aim} onChange={this.handleChange}>
					<option value='' disabled>{placeholder}</option>
					<option value='cut'>{optionCut}</option>
					<option value='keep'>{optionKeep}</option>
					<option value='bulk'>{optionBulk}</option>
				</select>
			</div>
		)
	}
}

export default GBAimInput