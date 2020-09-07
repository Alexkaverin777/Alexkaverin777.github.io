import React from 'react';
import Bio from '../Bio/Bio.js'

const Header = props => {
	return (
		<header className="header">
			<Bio
				name="Александр"
				lastName="Каверни"
			/>
		</header>

	)
};

export default Header

