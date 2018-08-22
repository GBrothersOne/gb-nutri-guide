import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GBSexInput from './GBSexInput'
import GBAgeInput from './GBAgeInput'
import GBHeightInput from './GBHeightInput'
import GBWeightInput from './GBWeightInput'
import GBBodyfatInput from './GBBodyfatInput'
import GBActivityInput from './GBActivityInput'
import GBAimInput from './GBAimInput'

// Visual texts
const TITLE = 'DONNÉES DE CALCUL'
const SEX_LABEL_MALE = 'Homme'
const SEX_LABEL_FEMALE = 'Femme'
const AGE_PLACEHOLDER = 'Age'
const HEIGHT_PLACEHOLDER = 'Taille (cm)'
const WEIGHT_PLACEHOLDER = 'Poids (kg)'
const BODYFAT_LABEL = 'Je connais mon taux de graisse'
const BODYFAT_PLACEHOLDER= 'Taux de graisse (%)'
const AIM_PLACEHOLDER = 'Objectif'
const AIM_CUT = 'Perte de graisse'
const AIM_KEEP = 'Entretien physique'
const AIM_BULK = 'Prise de masse'
const ACTIVITY_PLACEHOLDER = "Niveau d'activité"
const ACTIVITY_HELP = {
	level0: "▸ 1.2 = Sédentaire",
	level1: "▸ 1.4 = Personne active",
	level2: "▸ 1.6 = Sportif régulier",
	level3: "▸ 1.8 = Grand sportif",
	level4: "▸ 2.0 = Très grand sportif",
}

class GBUserForm extends Component {

	static propTypes = {
		mode: PropTypes.string.isRequired,
		sex: PropTypes.string.isRequired,
		onSexChange: PropTypes.func.isRequired,
		age: PropTypes.string.isRequired,
		onAgeChange: PropTypes.func.isRequired,
		height: PropTypes.string.isRequired,
		onHeightChange: PropTypes.func.isRequired,
		weight: PropTypes.string.isRequired,
		onWeightChange: PropTypes.func.isRequired,
		bodyfat: PropTypes.string.isRequired,
		onBodyfatChange: PropTypes.func.isRequired,
		activity: PropTypes.string.isRequired,
		onActivityChange: PropTypes.func.isRequired,
		aim: PropTypes.string.isRequired,
		onAimChange: PropTypes.func.isRequired,
	}

	handleSexChange = (sex) => {
		this.props.onSexChange(sex)
	}

	handleAgeChange = (age) => {
		this.props.onAgeChange(age)
	}

	handleHeightChange = (height) => {
		this.props.onHeightChange(height)
	}

	handleWeightChange = (weight) => {
		this.props.onWeightChange(weight)
	}

	handleBodyfatChange = (bodyfat) => {
		this.props.onBodyfatChange(bodyfat)
	}

	handleActivityChange = (activity) => {
		this.props.onActivityChange(activity)
	}

	handleAimChange = (aim) => {
		this.props.onAimChange(aim)
	}

	render() {

		const { mode, sex, age, height, weight, bodyfat, activity, aim } = this.props

		return ( 
			mode === 'form' && (
				<form className='GBUserForm'>
					<div className='formTitle'>{TITLE}</div>
					<div className='separator'></div>
					<GBSexInput 
						sex={sex}
						onSexChange={this.handleSexChange}
						optionMale={SEX_LABEL_MALE}
						optionFemale={SEX_LABEL_FEMALE} />
					<div className='horizontalContainer'>
						<GBAgeInput 
							age={age}
							onAgeChange={this.handleAgeChange}
							placeholder={AGE_PLACEHOLDER} />
						<GBHeightInput 
							height={height}
							onHeightChange={this.handleHeightChange}
							placeholder={HEIGHT_PLACEHOLDER} />
					</div>
					<div className='horizontalContainer'>
						<GBWeightInput 
							weight={weight}
							onWeightChange={this.handleWeightChange}
							placeholder={WEIGHT_PLACEHOLDER} />
						<GBAimInput 
							aim={aim}
							onAimChange={this.handleAimChange}
							placeholder={AIM_PLACEHOLDER}
							optionCut={AIM_CUT}
							optionKeep={AIM_KEEP}
							optionBulk={AIM_BULK} />
					</div>
					<GBBodyfatInput 
						bodyfat={bodyfat}
						onBodyfatChange={this.handleBodyfatChange}
						label={BODYFAT_LABEL}
						placeholder={BODYFAT_PLACEHOLDER} />
					<GBActivityInput 
						activity={activity}
						onActivityChange={this.handleActivityChange}
						placeholder={ACTIVITY_PLACEHOLDER} 
						helpMessages={ACTIVITY_HELP} />
				</form>
			)
		)
	}
}

export default GBUserForm