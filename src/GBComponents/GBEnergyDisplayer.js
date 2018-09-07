import React from 'react'

const GBEnergyDisplayer = ({ label, energy, unit }) => (
  <div className='verticalContainer'>
    <div >{ label ? label + ':' : null}</div>
    <div className='bubbleContainer'>
      <div className='dailyIntake'>{ Math.round(energy) }</div> 
      <div>{unit}</div>
    </div>
  </div>
)

export default GBEnergyDisplayer
