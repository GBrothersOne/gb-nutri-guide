import React, {Component} from 'react'
import PropTypes from 'prop-types'
import GBEnergyDisplayer from './GBEnergyDisplayer'
import GBMacroDisplayer from './GBMacroDisplayer'

// Visual texts
const BUTTON_READY = 'Voir le bilan'
const BUTTON_NOT_READY = 'Formulaire incomplet'
const TITLE = 'BILAN NUTRITIONNEL'
const AJR_LABEL = 'Apport énergétique recommandé'
const AJR_UNIT = 'kcal/jour'
const MACROS_LABEL = 'Répartition'
const MACROS_UNIT = 'g'
const MACROS_PR = 'Protéines'
const MACROS_LP = 'Lipides'
const MACROS_CH = 'Glucides'
const AJR_INFO = '* Apports totaux journaliers'


class GBDietOverview extends Component {

	static propTypes = {

	}

	handleButtonClick = (event) => {
		this.props.onModeChange('overview')
	}

	handleCloseClick = (event) => {
		this.props.onModeChange('form')
	}

	render() {

		const { mode, energy, proteins, lipids, carbohydrats } = this.props

		const ready = energy && proteins && lipids && carbohydrats

		if ( mode === 'overview') {
			return (
				<div className='displayer'>
					<button 
						className='GBCloseButton'
						onClick={this.handleCloseClick} >
					</button>
					<div className='overviewTitle'>{TITLE}</div>
					<div className='separator' />
					<GBEnergyDisplayer 
						label={AJR_LABEL}
						energy={energy}
						unit={AJR_UNIT} />
					<GBMacroDisplayer
						label={MACROS_PR}
						value={proteins}
						unit={MACROS_UNIT} />
					<GBMacroDisplayer
						label={MACROS_LP}
						value={lipids}
						unit={MACROS_UNIT} />
					<GBMacroDisplayer
						label={MACROS_CH}
						value={carbohydrats}
						unit={MACROS_UNIT} />
					<div className='info'>{AJR_INFO}</div>
				</div>
			)
		}
		else {
			return (
				<button 
					className='GBPushButton' 
					disabled={!ready}
					onClick={this.handleButtonClick} >
					{ ready ? BUTTON_READY : BUTTON_NOT_READY }
				</button>
			)
		}
	}
}

export default GBDietOverview
