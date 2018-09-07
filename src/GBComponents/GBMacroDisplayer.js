import React from 'react'

const GBMacroDisplayer = ({ label, value, unit }) => (
	<div className='horizontalContainer'>
		<div className='macroLabel'>{label}:</div>
		<div className='macroAmountArea'>
			<span className='macroValue'>{value}</span> {unit}
		</div>
	</div>
)

export default GBMacroDisplayer