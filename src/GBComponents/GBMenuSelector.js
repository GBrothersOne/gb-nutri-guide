import React, { Component } from 'react'
import GBMenuBox from './GBMenuBox'

class GBMenuSelector extends Component {

	render () {

		const { menus, activeMenu } = this.props

		return (
			<div className='GBMenuSelector'>

				{ Object.entries(menus).map( (menu) => (
					<GBMenuBox
						active={activeMenu === menu[0]}
						key={menu[0]}
						name={menu[0]}
						label={menu[1].label}
						energy={menu[1].energy}
						onClicked={this.props.onMenuSelected} />
				))}

			</div>
		)
	}
}

export default GBMenuSelector