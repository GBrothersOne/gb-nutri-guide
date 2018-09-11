export const SEX_CHANGE = 'GBMacroCalculator/SEX_CHANGE'
export const AGE_CHANGE = 'GBMacroCalculator/AGE_CHANGE'
export const HEIGHT_CHANGE = 'GBMacroCalculator/HEIGHT_CHANGE'
export const WEIGHT_CHANGE = 'GBMacroCalculator/WEIGHT_CHANGE'
export const AIM_CHANGE = 'GBMacroCalculator/AIM_CHANGE'
export const BODYFAT_CHANGE = 'GBMacroCalculator/BODYFAT_CHANGE'
export const ACTIVITY_CHANGE = 'GBMacroCalculator/ACTIVITY_CHANGE'

// Daily Energy Expenditure ratios (%)
const RA_CUT = -10
const RA_KEEP = 0
const RA_BULK = 10
// Energy ratios (kcal/g)
const BL_PR = 4
const BL_LP = 9
const BL_CH = 4
// Macros ratios (g/kg)
const RT_PR_CUT = 2.5
const RT_PR_KEEP = 2.0
const RT_PR_BULK = 2.2
const RT_LP_CUT = 1.3
const RT_LP_KEEP = 1.0
const RT_LP_BULK = 1.4
// Default bodyfat
const DEF_BDF = 20

const initialState = {
  sex: 'male',
  age: '',
  height: '',
  weight: '',
  bodyfat: '',
  activity: '',
  aim: '',
  energy: '',
  proteins: '',
  lipids: '',
  carbohydrats: '',
}
/*
const initialState = {
  sex: 'male',
  age: '25',
  height: '172',
  weight: '70',
  bodyfat: '',
  activity: '1.4',
  aim: '',
  energy: '',
  proteins: '',
  lipids: '',
  carbohydrats: '',
}*/

export default (state = initialState, action) => {
  switch (action.type) {

    case SEX_CHANGE:
      return processing({
        ...state,
        sex: action.sex
      })

    case AGE_CHANGE:
      return processing({
        ...state,
        age: action.age
      })

    case HEIGHT_CHANGE:
      return processing({
        ...state,
        height: action.height
      })

    case WEIGHT_CHANGE:
      return processing({
        ...state,
        weight: action.weight
      })

    case AIM_CHANGE:
      return processing({
        ...state,
        aim: action.aim
      })

    case BODYFAT_CHANGE:
      return processing({
        ...state,
        bodyfat: action.bodyfat
      })

    case ACTIVITY_CHANGE:
      return processing({
        ...state,
        activity: action.activity
      })

    default:
      return state

  }
}

export const handleSexChange = (sex) => {
  return dispatch => {
    dispatch({
      type: SEX_CHANGE,
      sex: sex
    })
  }
}

export const handleAgeChange = (age) => {
  return dispatch => {
    dispatch({
      type: AGE_CHANGE,
      age: age
    })
  }
}

export const handleHeightChange = (height) => {
  return dispatch => {
    dispatch({
      type: HEIGHT_CHANGE,
      height: height
    })
  }
}

export const handleWeightChange = (weight) => {
  return dispatch => {
    dispatch({
      type: WEIGHT_CHANGE,
      weight: weight
    })
  }
}

export const handleAimChange = (aim) => {
  return dispatch => {
    dispatch({
      type: AIM_CHANGE,
      aim: aim
    })
  }
}

export const handleBodyfatChange = (bodyfat) => {
  return dispatch => {
    dispatch({
      type: BODYFAT_CHANGE,
      bodyfat: bodyfat
    })
  }
}

export const handleActivityChange = (activity) => {
  return dispatch => {
    dispatch({
      type: ACTIVITY_CHANGE,
      activity: activity
    })
  }
}

function processing (state) {
  const { sex, age, height, weight, bodyfat, activity, aim } = state
  const ready = ( sex && age && height && weight && !isNaN(activity) && activity && aim )
  if ( ready ) {
    const dryWeight = weight / 100 * (100 - (bodyfat ? bodyfat : DEF_BDF))
    const bmr = bodyfat ? katchMcArdleBmr(dryWeight) 
              : averageBmr(sex, weight, height, age)
    const tdee = processTdee(bmr, activity)
    const energy = processDailyIntake(tdee, aim)
    const { proteins, lipids, carbohydrats } = processMacros(energy, dryWeight, aim)
    return {
      ...state,
      energy: energy,
      proteins: proteins,
      lipids: lipids,
      carbohydrats: carbohydrats
    }
  }
  return {
    ...state,
    energy: '',
    proteins: '',
    lipids: '',
    carbohydrats: ''
  }
}

function harrisEtBenedictBmr (sex, weight, height, age) {
  return Math.round(
    sex === 'male' ?  
    ( 13.397 * weight + 4.799 * height - 5.677 * age + 88.362 )
    : ( 9.247 * weight + 3.098 * height - 4.33 * age + 447.593 )
  )
}

function blackEtAlBmr (sex, weight, height, age) {
  return Math.round(
    ( sex === 'male' ? 259 : 230 ) *
    ( weight**0.48 * (height / 100)**0.5 * age**-0.13 )
  ) 
}

function mifflinStJeorBmr (sex, weight, height, age) {
  return Math.round(
    ( sex === 'male' ? 5 : -161 ) +
    ( 10 * weight + 6.25 * height - 5 * age )
  ) 
}

function averageBmr (sex, weight, height, age) {
  return Math.round((
    harrisEtBenedictBmr(sex, weight, height, age) +
    blackEtAlBmr(sex, weight, height, age) +
    mifflinStJeorBmr (sex, weight, height, age)
  ) / 3 )
}

function katchMcArdleBmr (dryWeight) {
  return Math.round( 370 + 21.6 * dryWeight )
}

function processTdee (bmr, activity) {
  return Math.round( bmr * activity )
}

function processDailyIntake (tdee, aim) {
  return Math.round( 
    tdee / 100 * ( 100 + ( aim === 'cut' ?  RA_CUT : ( aim === 'keep' ? RA_KEEP : RA_BULK )))
  )
}

function processMacros (energy, dryWeight, aim) {
  var proteinsRatio, lipidsRatio

  aim === 'cut' ? (
    (proteinsRatio = RT_PR_CUT) &&
    (lipidsRatio = RT_LP_CUT)
  ):(
  aim === 'keep' ? (
    (proteinsRatio = RT_PR_KEEP) &&
    (lipidsRatio = RT_LP_KEEP)
  ):(
    (proteinsRatio = RT_PR_BULK) &&
    (lipidsRatio = RT_LP_BULK)
  ))

  const proteins = Math.round( dryWeight * proteinsRatio )

  const lipids = Math.round( dryWeight * lipidsRatio )

  const carbohydrats = Math.round(
    (energy - (proteins * BL_PR + lipids * BL_LP)) / BL_CH
  )
  
  const macros = {
    proteins: proteins,
    lipids: lipids,
    carbohydrats: carbohydrats,
  }

  return macros
}

