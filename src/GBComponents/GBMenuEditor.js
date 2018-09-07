import React, { Component } from 'react'
import GBMenuElement from './GBMenuElement'
import GBFoodBox from './GBFoodBox'
import foods from '../data/foods'

class GBMenuEditor extends Component {

	render() {

		const { menu } = this.props

		return ( menu ? (
			<div className='GBMenuEditor'>
				<div className='GBMenuEditorOverview'>
					<div className='GBMenuEditorTitle'>{menu.label}</div>
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
							onAddFood={() => this.props.onAddFood(food)} />
					))}
				</div>
			</div> ): null
		)
	}
}

export default GBMenuEditor