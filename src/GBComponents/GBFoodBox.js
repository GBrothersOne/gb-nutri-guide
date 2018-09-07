import React, {Component} from 'react'

class GBFoodBox extends Component {

	render() {
		const { label, picture } = this.props
		const style = { backgroundImage: `url(${picture})` }
		return (
			<div className='GBFoodBox' onClick={this.props.onAddFood}>
				<div className='GBFoodBoxBackground' style={style}></div>
				<div className='GBFoodBoxLabel'>{label}</div>
			</div>
		)
	}
}

export default GBFoodBox