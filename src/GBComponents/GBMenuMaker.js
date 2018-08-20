import React, { Component } from 'react'

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
					<div className='overviewTitle'>En construction...</div>
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