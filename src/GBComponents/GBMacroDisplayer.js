import React from 'react'
import PropTypes from 'prop-types'

const GBEnergyDisplayer = ({ label, value, unit }) => (
	<div className='horizontalContainer'>
		<span className='macroLabel'>{label}:</span>
		<span className='macroAmountArea'>
			<span className='macroValue'>{value}</span> {unit}
		</span>
	</div>
)

GBEnergyDisplayer.propTypes = {
  
}

export default GBEnergyDisplayer