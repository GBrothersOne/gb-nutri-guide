import React from 'react'
import PropTypes from 'prop-types'

const GBEnergyDisplayer = ({ label, energy, unit }) => (
  <div>
    <div>{label}:</div>
    <div className='bubbleContainer'>
      <div className='dailyIntake'>{energy}</div> 
      <div>{unit}</div>
    </div>
  </div>
)

GBEnergyDisplayer.propTypes = {
  
}

export default GBEnergyDisplayer
