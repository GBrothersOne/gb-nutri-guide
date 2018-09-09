import React, { Component } from 'react'
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
const BUTTON_LABEL_EDITOR = 'Créer son menu'
const BUTTON_LABEL_OVERVIEW = 'Voir le bilan'
const BUTTON_LABEL_DISABLED = 'Formulaire incomplet'
const ACTIVITY_HELP = {
	level0: "▸ 1.2 = Sédentaire",
	level1: "▸ 1.4 = Personne active",
	level2: "▸ 1.6 = Sportif régulier",
	level3: "▸ 1.8 = Grand sportif",
	level4: "▸ 2.0 = Très grand sportif",
}


class GBUserForm extends Component {

	render() {

		const { modes, mode } = this.props

		const { sex, age, height, weight, bodyfat, activity, aim } =  this.props

		const ready = ( sex && age && height && weight && !isNaN(activity) && activity && aim )

		return ( 
			<div className={`GBUserForm ${mode === modes.form ? 'active' : 'inactive'}`}>
				<div className='formTitle'>{TITLE}</div>
				<div className='separator'></div>
				<GBSexInput 
					sex={sex}
					onSexChange={this.props.onSexChange}
					optionMale={SEX_LABEL_MALE}
					optionFemale={SEX_LABEL_FEMALE} />
				<div className='horizontalContainer'>
					<GBAgeInput 
						age={age}
						onAgeChange={this.props.onAgeChange}
						placeholder={AGE_PLACEHOLDER} />
					<GBHeightInput 
						height={height}
						onHeightChange={this.props.onHeightChange}
						placeholder={HEIGHT_PLACEHOLDER} />
				</div>
				<div className='horizontalContainer'>
					<GBWeightInput 
						weight={weight}
						onWeightChange={this.props.onWeightChange}
						placeholder={WEIGHT_PLACEHOLDER} />
					<GBAimInput 
						aim={aim}
						onAimChange={this.props.onAimChange}
						placeholder={AIM_PLACEHOLDER}
						optionCut={AIM_CUT}
						optionKeep={AIM_KEEP}
						optionBulk={AIM_BULK} />
				</div>
				<GBBodyfatInput 
					bodyfat={bodyfat}
					onBodyfatChange={this.props.onBodyfatChange}
					label={BODYFAT_LABEL}
					placeholder={BODYFAT_PLACEHOLDER} />
				<GBActivityInput 
					activity={activity}
					onActivityChange={this.props.onActivityChange}
					placeholder={ACTIVITY_PLACEHOLDER} 
					helpMessages={ACTIVITY_HELP} />
					<br/>
				<button 
					className='GBPushButton' 
					disabled={ !ready }
					onClick={() => this.props.onModeChange(modes.overview)} >
					{ ready ? BUTTON_LABEL_OVERVIEW : BUTTON_LABEL_DISABLED }
				</button>
				<button 
					className='GBPushButton' 
					disabled={ !ready }
					onClick={() => this.props.onModeChange(modes.editor)} >
					{ ready ? BUTTON_LABEL_EDITOR : BUTTON_LABEL_DISABLED }
				</button>
			</div>
		)
	}
}

export default GBUserForm