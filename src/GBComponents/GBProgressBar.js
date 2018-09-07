import React, { Component } from 'react'

class GBProgressBar extends Component {

	render () {

		const { label, value, target } = this.props
		const info = Math.round(value) + 'g / ' + target + 'g'
		const progress = value / target * 100
		const classNames = 'GBProgressBarIndicator' + ( progress > 100 ? ' GBProgressBarOverflow' : '' )
		const style = { width: ( progress <= 100 ? progress : 100 ) + '%'}
		
		return (
			<div className='GBProgressBar'>
				<div className='GBProgressBarLabel'>{label}:</div>
				<div className='GBProgressBarBackground'>
					<div className={classNames} style={style}></div>
					<div className='GBProgressBarInfo'>{info}</div>
				</div>
				
			</div>
		)
	}
}

export default GBProgressBar