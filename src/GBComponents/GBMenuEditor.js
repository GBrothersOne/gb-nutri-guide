import React, { Component } from 'react'
import GBMenuElement from './GBMenuElement'
import GBFoodBox from './GBFoodBox'
import foods from '../data/foods'

const DEFAULT_FOOD_INFO = "Cliquer sur un aliment pour l'ajouter"

class GBMenuEditor extends Component {

	constructor(props) {
		super(props)
		this.state = {
			foodInfo: DEFAULT_FOOD_INFO
		}
	}

	render() {

		const { menu } = this.props

		const { foodInfo } = this.state

		return ( menu ? (
			<div className='GBMenuEditor'>
				<div className='GBMenuEditorOverview'>
					<div className='emptyElement'>{menu.label}</div>
					{menu.components.map( (component) => ( 
						<GBMenuElement 
							key={component.name}
							label={component.label}
							quantity= {component.quantity} 
							unit={component.unit}
							onQuantityChange={(quantity) => this.props.onQuantityChange(component.name, quantity)}
							onRemoveFood={() => this.props.onRemoveFood(component.name)} />
					))}
				</div>
				<div className='GBFoodPanel'>
					{foods.map( (food) => (
						<GBFoodBox 
							key={food.name}
							label={food.label}
							picture={food.picture}
							onMouseOver={() => this.setState({ foodInfo: food.description})}
							onMouseOut={() => this.setState({ foodInfo: DEFAULT_FOOD_INFO})}
							onAddFood={() => this.props.onAddFood(food)} />
					))}
				</div>
				<div className='GBFoodInfo'>{foodInfo}</div>
			</div> ): null
		)
	}
}

export default GBMenuEditor