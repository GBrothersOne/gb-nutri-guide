import React from 'react'
import PropTypes from 'prop-types'

const GBEnergyDisplayer = ({ label, value, unit }) => (
	<div className='horizontalContainer'>
		<div className='macroLabel'>{label}:</div>
		<div className='macroAmountArea'>
			<span className='macroValue'>{value}</span> {unit}
		</div>
	</div>
)

GBEnergyDisplayer.propTypes = {
  
}

export default GBEnergyDisplayer