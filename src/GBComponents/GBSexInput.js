import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GBSexInput extends Component {

	static propTypes = {
		sex: PropTypes.string.isRequired,
		onSexChange: PropTypes.func.isRequired,
		optionMale: PropTypes.string,
		optionFemale: PropTypes.string,
	}

	static defaultProps = {
		optionMale: 'Male',
		optionFemale: 'Female',
	}

	handleChange = (event) => {
		this.props.onSexChange(event.target.value)
	}

	render() {
		const { optionMale, optionFemale, sex } = this.props
		return (
			<div className='horizontalContainer'>
				<label className='GBCheckOption'>{optionMale}
					<input 
						type='radio'
						value='male'
						checked={sex === 'male'}
						onChange={this.handleChange} />
					<span className='GBCheckOptionMark'></span>
				</label>
				<label className='GBCheckOption'>{optionFemale}
					<input 
						type='radio'
						value='female'
						checked={sex === 'female'}
						onChange={this.handleChange} />
					<span className='GBCheckOptionMark'></span>
				</label>
			</div>
		)
	}
}

export default GBSexInput