import React, { Component } from 'react'

class GBMenuElement extends Component {

	handleQuantityChange = (event) => {
		this.props.onQuantityChange(event.target.value)
	}

	render() {
		const { label, quantity, unit } = this.props
		return (
			<div className='GBMenuElement'>

				<div>{label}</div>

				<input 
					type='number' 
					className='GBMenuElementQuantity' 
					value={quantity}
					onChange={this.handleQuantityChange} />

				<div className='GBMenuElementUnit'>{unit}</div>

				<button 
					className='GBCloseButton' 
					onClick={this.props.onRemoveFood} />
			</div>
		)
	}
}

export default GBMenuElement