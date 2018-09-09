import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GBActivityInput extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			focused: false,
		}
	}

	static propTypes = {
		activity: PropTypes.string.isRequired,
		onActivityChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		helpMessages: PropTypes.object,
	}

	static defaultProps = {
		placeholder: 'Activity',
		helpMessages: {
			level0: "▸ 1.2 = Potato",
			level1: "▸ 1.4 = Active",
			level2: "▸ 1.6 = Dynamic",
			level3: "▸ 1.8 = Athlete",
			level4: "▸ 2.0 = God",
		}
	}

	handleChange = ({ target: { value } }) => {
		value = value
			.replace(/[^0-9.]/g, '')
			.slice(0, 4)

		this.props.onActivityChange(value)
	}

	handleFocus = () => {
		this.setState({ focused: true })
	}

	handleBlur = () => {
		this.setState({ focused: false })
	}

	handleSetActivity = (event) => {
		this.props.onActivityChange(event.target.dataset.activity)
		this.setState({ focused: false })
	}

	render() {
		const { placeholder, activity, helpMessages } = this.props
		const { focused } = this.state
		return (
			<div className='verticalContainer'>
				<input 
					type='number'
					step={0.01}
					className='GBWriteInput'
					placeholder={placeholder}
					value={activity}
					onFocus={this.handleFocus}
					onChange={this.handleChange} />
				<div className={`helpMessage ${focused ? 'active' : 'inactive'}`}>
					<div className='helpButton' data-activity={1.2} onClick={this.handleSetActivity} >
						{helpMessages.level0}
					</div>
					<div className='helpButton' data-activity={1.4} onClick={this.handleSetActivity}>
						{helpMessages.level1}
					</div>
					<div className='helpButton' data-activity={1.6} onClick={this.handleSetActivity}>
						{helpMessages.level2}
					</div>
					<div className='helpButton' data-activity={1.8} onClick={this.handleSetActivity}>
						{helpMessages.level3}
					</div>
					<div className='helpButton' data-activity={2.0} onClick={this.handleSetActivity}>
						{helpMessages.level4}
					</div>
				</div> 
			</div>
		)
	}
}

export default GBActivityInput