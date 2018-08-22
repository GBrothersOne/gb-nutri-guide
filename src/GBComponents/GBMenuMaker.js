import React, { Component } from 'react'
import GBMacroDisplayer from './GBMacroDisplayer'

const BUTTON_READY = 'Création de menu'
const BUTTON_NOT_READY = 'Formulaire incomplet'

class GBMenuMaker extends Component {

	constructor(props) {
		super(props)
	}

	handleButtonClick = (event) => {
		this.props.onModeChange('menuMaker')
	}

	handleCloseClick = (event) => {
		this.props.onModeChange('form')
	}

	render() {
		
		const { mode, energy, proteins, lipids, carbohydrats } = this.props

		const ready = energy && proteins && lipids && carbohydrats

		if ( mode === 'menuMaker') {
			return (
				<div className='menuMakerPanel'>
					<button 
						className='GBCloseButton'
						onClick={this.handleCloseClick} >
					</button>
					<div className='menuTitle'>ÉDITEUR DE MENUS</div>
					<div className='horizontalContainer'>
						<div className='mealBox'>Petit déjeuner</div>
						<div className='mealBox'>Déjeuner</div>
						<div className='mealBox'>Souper</div>
						<div className='mealBox'>Collations</div>
					</div>
					<div className='activeMealBox'>
						Déjeuner
						<GBMacroDisplayer
						label="Brocoli"
						value={250}
						unit="g" />
						<GBMacroDisplayer
						label="Poulet"
						value={250}
						unit="g" />
						<GBMacroDisplayer
						label="Riz"
						value={250}
						unit="g" />
						<GBMacroDisplayer
						label="Huile d'olive"
						value={250}
						unit="g" />
					</div>
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

export default GBMenuMaker