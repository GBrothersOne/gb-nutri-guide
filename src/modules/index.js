import { combineReducers } from 'redux'

import GBStateCalculator from './GBStateCalculator'
import GBMacroCalculator from './GBMacroCalculator'
import GBMenuCalculator from './GBMenuCalculator'

export default combineReducers({
	GBStateCalculator,
	GBMacroCalculator,
	GBMenuCalculator,
})