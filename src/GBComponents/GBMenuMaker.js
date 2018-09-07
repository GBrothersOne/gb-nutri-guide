import React, { Component } from 'react'

import GBMenuSelector from './GBMenuSelector'
import GBMenuEditor from './GBMenuEditor'
import GBMenuEvaluator from './GBMenuEvaluator'

const BUTTON_READY = 'Création de menu'
const BUTTON_NOT_READY = 'Formulaire incomplet'

class GBMenuMaker extends Component {

	constructor(props) {
		super(props)
		this.state = {
			activeMenu: '',
		}
	}

	handleButtonClick = (event) => {
		this.props.onModeChange('menuMaker')
	}

	handleCloseClick = (event) => {
		this.props.onModeChange('form')
	}

	handleMenuSelected = (menu) => {
		this.setState({ activeMenu: menu })
	}

	handleAddFood = (food) => {
		const { activeMenu } = this.state
		this.props.onAddFood(activeMenu, food)
	}

	handleRemoveFood = (name) => {
		const { activeMenu } = this.state
		this.props.onRemoveFood(activeMenu, name)
	}

	render() {

		const { activeMenu } = this.state
		
		const { mode, energy, proteins, lipids, carbohydrats, menus, currentMacros } = this.props

		const targetMacros = {
			proteins: proteins,
			lipids: lipids,
			carbohydrats: carbohydrats,
		}

		const ready = energy && proteins && lipids && carbohydrats

		if ( mode === 'menuMaker') {
			return (
				<div className='GBMenuMaker'>
					<button className='GBCloseButton' onClick={this.handleCloseClick} />
					<div className='GBMenuMakerTitle'>ÉDITEUR DE MENUS</div>
					<GBMenuSelector
						menus={menus}
						activeMenu={activeMenu}
						onMenuSelected={this.handleMenuSelected} />
					<GBMenuEditor 
						menu={menus[activeMenu]}
						onAddFood={this.handleAddFood}
						onQuantityChange={(name, quantity) => this.props.onQuantityChange(activeMenu, name, quantity)}
						onRemoveFood={this.handleRemoveFood} />
					<GBMenuEvaluator 
						currentMacros={currentMacros}
						targetMacros={targetMacros} />
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