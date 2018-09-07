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
          handleActivityChange, } from '../../modules/GBMacroCalculator'

import {  handleAddFood,
          handleQuantityChange,
          handleRemoveFood, } from '../../modules/GBMenuCalculator'

const Home = (props) => (
  <div className='home'>
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
      carbohydrats={props.carbohydrats} 
      menus={props.menus}
      currentMacros={props.currentMacros}
      onAddFood={props.handleAddFood}
      onQuantityChange={props.handleQuantityChange}
      onRemoveFood={props.handleRemoveFood} />
  </div>
)

const mapStateToProps = ({ GBMacroCalculator, GBMenuCalculator }) => ({
  mode: GBMacroCalculator.mode,
  sex: GBMacroCalculator.sex,
  age: GBMacroCalculator.age,
  height: GBMacroCalculator.height,
  weight: GBMacroCalculator.weight,
  aim: GBMacroCalculator.aim,
  bodyfat: GBMacroCalculator.bodyfat,
  activity: GBMacroCalculator.activity,
  energy: GBMacroCalculator.energy,
  proteins: GBMacroCalculator.proteins,
  lipids: GBMacroCalculator.lipids,
  carbohydrats: GBMacroCalculator.carbohydrats,
  menus: GBMenuCalculator.menus,
  currentMacros: GBMenuCalculator.macros,
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
  handleAddFood,
  handleQuantityChange,
  handleRemoveFood,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)


/*
<button 
  onClick={() => props.changePage()}
  className='GBPushButton' >
  About us
</button>
*/