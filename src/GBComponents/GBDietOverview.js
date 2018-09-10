import React, {Component} from 'react'
import GBEnergyDisplayer from './GBEnergyDisplayer'
import GBMacroDisplayer from './GBMacroDisplayer'

// Visual texts
const TITLE = 'BILAN NUTRITIONNEL'
const AJR_LABEL = 'Apport énergétique recommandé'
const AJR_UNIT = 'kcal/jour'
const MACROS_UNIT = 'g'
const MACROS_PR = 'Protéines'
const MACROS_LP = 'Lipides'
const MACROS_CH = 'Glucides'
const AJR_INFO = '* Apports totaux journaliers'


class GBDietOverview extends Component {

	render() {

		const { energy, proteins, lipids, carbohydrats } = this.props

		const ready = ( energy && proteins && lipids && carbohydrats )

		return (
			<div className={`displayerWraper ${ready ? 'active' : 'inactive'}`}>
				<div className='displayer'>
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
			</div>
		)
	}
}

export default GBDietOverview
