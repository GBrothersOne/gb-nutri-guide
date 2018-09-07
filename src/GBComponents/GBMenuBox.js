import React, {Component} from 'react'
import GBEnergyDisplayer from './GBEnergyDisplayer'

const ENERGY_UNIT = 'kcal'

class GBMenuBox extends Component {

	render () {

		const { active, name, label, energy } = this.props

		return (
			<div 
				className={`GBMenuBoxContainer ${active ? 'active' : 'inactive'}`}
				onClick={() => this.props.onClicked(name)} >

				<div className={`GBMenuBoxBackground ${name}`} ></div>
				<div className='GBMenuBoxActiveLayer'>
					<GBEnergyDisplayer 
						energy={energy}
						unit={ENERGY_UNIT} />
				</div>
				<div className='GBMenuBoxLabel' >{label}</div>
			</div>
		)
	}
}

export default GBMenuBox