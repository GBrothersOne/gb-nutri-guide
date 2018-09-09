import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GBBodyfatInput extends Component {

	constructor(props) {
		super(props)
		this.state = { bodyfatChecked: false }
	}

	static propTypes = {
		bodyfat: PropTypes.string.isRequired,
		onBodyfatChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		label: PropTypes.string,
	}

	static defaultProps = {
		label: 'I know my bodyfat',
		placeholder: 'Bodyfat (%)',
	}

	handleOptionChange = (event) => {
		const checked = event.target.checked
		this.setState({bodyfatChecked: checked})
		checked === false && this.props.onBodyfatChange('')
	}

	handleValueChange = ({ target: { value} }) => {
		value = value
			.replace(/\D+/, '')
			.slice(0, 2)
		this.props.onBodyfatChange(value)
	}

	render() {
		
		const { placeholder, label, bodyfat } = this.props
		
		const bodyfatActive = this.state.bodyfatChecked || bodyfat
		
		return (
			<div className='verticalContainer'>
				<div>
					<label className='GBCheckOption'>{label}
						<input 
							type='checkbox'
							checked={bodyfatActive}
							onChange={this.handleOptionChange} />
						<span className='GBCheckOptionMark'></span>
					</label>
				</div>
				<div className={`bodyfatInput ${bodyfatActive ? 'active' : 'inactive'}`}>
					<input
						type='number'
						className='GBWriteInput'
						placeholder={placeholder}
						disabled={this.state.bodyfatState === 'unknown'}
						value={bodyfat}
						onChange={this.handleValueChange} />
				</div>
			</div>
		)
	}
}

export default GBBodyfatInput