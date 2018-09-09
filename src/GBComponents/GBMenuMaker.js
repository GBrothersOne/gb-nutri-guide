import React, { Component } from 'react'

import GBMenuSelector from './GBMenuSelector'
import GBMenuEditor from './GBMenuEditor'
import GBMenuEvaluator from './GBMenuEvaluator'

import jsPDF from 'jspdf'

const BUTTON_READY = 'Éditeur de menus'
const BUTTON_NOT_READY = 'Formulaire incomplet'

class GBMenuMaker extends Component {

	constructor(props) {
		super(props)
		this.state = {
			activeMenu: '',
		}
	}

	handleMenuSelected = (menu) => {
		this.setState({ activeMenu: menu })
	}

	handlePDF () {
		var doc = new jsPDF()
		doc.text("Test", 10, 10)
		doc.save('Menus.pdf')
	}

	render() {

		const { activeMenu } = this.state
		
		const { modes, mode } = this.props

		const { energy, proteins, lipids, carbohydrats, menus, currentMacros } = this.props

		const targetMacros = {
			proteins: proteins,
			lipids: lipids,
			carbohydrats: carbohydrats,
		}

		const ready = energy && proteins && lipids && carbohydrats

		return (
			<div className={`GBMenuMaker ${mode === modes.editor ? 'active' : 'inactive'}`}>
				<div className='verticalContainer'>
					<div className='GBMenuMakerTitle'>ÉDITEUR DE MENUS</div>
					<div className='separator'></div>
					
					<GBMenuEvaluator 
					currentMacros={currentMacros}
					targetMacros={targetMacros} />
				</div>
				<GBMenuSelector
					menus={menus}
					activeMenu={activeMenu}
					onMenuSelected={this.handleMenuSelected} />
				<GBMenuEditor 
					menu={menus[activeMenu]}
					onAddFood={(food) => this.props.onAddFood(activeMenu, food)}
					onQuantityChange={(name, quantity) => this.props.onQuantityChange(activeMenu, name, quantity)}
					onRemoveFood={(name) => this.props.onRemoveFood(activeMenu, name)} />
				<button 
					className='GBPushButton' 
					onClick={console.log('PDF')}>
					Générer le PDF
				</button>
				<button 
					className='GBPushButton' 
					onClick={() => this.props.onModeChange(modes.form)}>
					Modifier les données
				</button>
			</div>
		)
	}
}

export default GBMenuMaker