import React, { Component } from 'react'

class GBActivityInput extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			focused: false,
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
				<div className={`helpMessageWraper ${focused ? 'active' : 'inactive'}`}>
					<div className='helpMessage'>
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
			</div>
		)
	}
}

export default GBActivityInput