import React, { Component } from 'react'
import GBProgressBar from './GBProgressBar'

const LABEL_PROTEINS = 'Protéines'
const LABEL_LIPIDS = 'Lipides'
const LABEL_CARBOHYDRATS = 'Glucides'

class GBMenuEvaluator extends Component {

	render () {

		const { currentMacros, targetMacros } = this.props

		return (
			<div className='GBMenuEvaluator'>
				<GBProgressBar 
					label={LABEL_PROTEINS}
					value={currentMacros.proteins}
					target={targetMacros.proteins} />
				<GBProgressBar 
					label={LABEL_LIPIDS}
					value={currentMacros.lipids}
					target={targetMacros.lipids} />
				<GBProgressBar 
					label={LABEL_CARBOHYDRATS}
					value={currentMacros.carbohydrats}
					target={targetMacros.carbohydrats} />
			</div>
		)
	}
}
					
export default GBMenuEvaluator