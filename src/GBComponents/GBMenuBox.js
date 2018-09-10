import React, {Component} from 'react'
import GBEnergyDisplayer from './GBEnergyDisplayer'

const ENERGY_UNIT = 'kcal'

class GBMenuBox extends Component {

	render () {

		const { active, name, label, energy, targetEnergy } = this.props

		return (
			<div 
				className={`GBMenuBoxContainer ${active ? 'active' : 'inactive'}`}
				onClick={() => this.props.onClicked(name)} >

				<div className={`GBMenuBoxBackground ${name}`} ></div>
				<div className='GBMenuBoxActiveLayer'>
					<div 
						className='GBMenuBoxEnergyArea'>
						{Math.round(energy)}
						<span className='GBMenuBoxEnergyAreaUnit'> kcal</span>
					</div>
					<div className='GBMenuBoxEnergyAreaInfo'>Recommandé:</div>
					<div className='GBMenuBoxEnergyAreaInfo'>{targetEnergy} kcal</div>
				</div>
				<div className={`GBMenuBoxLabel ${active ? 'active' : 'inactive'}`} >{label}</div>
			</div>
		)
	}
}

export default GBMenuBox