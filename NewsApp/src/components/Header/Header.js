import React from "react";
import './Header.scss';
import {NavLink} from 'react-router-dom';


const Header = props => {
	return (
		<header className={`header ${props.classHeader}`}>
			<div className="wrapper-header">
				<div className="logo">
					{props.taxtLogo}
				</div>
				<menu className={`menu-header ${props.headerMenu}`}>
					<li className="menu__item">
						<NavLink to="/" className="menu__link">Главная</NavLink>
					</li>
					<li className="menu__item">
						<NavLink to="/allNews" className="menu__link">Новости</NavLink>
					</li>
					<li className="menu__item">
						<NavLink to="/contact" className="menu__link">Контакты </NavLink>
					</li>
				</menu>
			</div>
		</header>
	)
};

export default Header