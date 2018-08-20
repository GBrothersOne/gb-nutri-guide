import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import '../../GBComponents/GBStyleSheets'
import GBUserForm from '../../GBComponents/GBUserForm'
import GBDietOverview from '../../GBComponents/GBDietOverview'
import GBMenuMaker from '../../GBComponents/GBMenuMaker'

import {  handleModeChange,
          handleSexChange,
          handleAgeChange,
          handleHeightChange,
          handleWeightChange,
          handleAimChange,
          handleBodyfatChange,
          handleActivityChange, } from '../../modules/GBCalculator'

const Home = (props) => (
  <div>
    <GBUserForm
      mode={props.mode}
      sex={props.sex}
      onSexChange={props.handleSexChange}
      age={props.age}
      onAgeChange={props.handleAgeChange}
      height={props.height}
      onHeightChange={props.handleHeightChange}
      weight={props.weight}
      onWeightChange={props.handleWeightChange}
      bodyfat={props.bodyfat}
      onBodyfatChange={props.handleBodyfatChange}
      activity={props.activity}
      onActivityChange={props.handleActivityChange}
      aim={props.aim}
      onAimChange={props.handleAimChange} />
    <GBDietOverview 
      mode={props.mode}
      onModeChange={props.handleModeChange}
      energy={props.energy}
      proteins={props.proteins}
      lipids={props.lipids}
      carbohydrats={props.carbohydrats} />
    <GBMenuMaker 
      mode={props.mode}
      onModeChange={props.handleModeChange}
      energy={props.energy}
      proteins={props.proteins}
      lipids={props.lipids}
      carbohydrats={props.carbohydrats} />
    <br />
    <button 
      onClick={() => props.changePage()}
      className='GBPushButton' >
      About us
    </button>
  </div>
)

const mapStateToProps = ({ GBCalculator }) => ({
  mode: GBCalculator.mode,
  sex: GBCalculator.sex,
  age: GBCalculator.age,
  height: GBCalculator.height,
  weight: GBCalculator.weight,
  aim: GBCalculator.aim,
  bodyfat: GBCalculator.bodyfat,
  activity: GBCalculator.activity,
  energy: GBCalculator.energy,
  proteins: GBCalculator.proteins,
  lipids: GBCalculator.lipids,
  carbohydrats: GBCalculator.carbohydrats,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  handleModeChange,
  handleSexChange,
  handleAgeChange,
  handleHeightChange,
  handleWeightChange,
  handleAimChange,
  handleBodyfatChange,
  handleActivityChange,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)