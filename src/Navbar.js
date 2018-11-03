import React from 'react';
import PropTypes from 'prop-types';

const myStyles = {
	backgroundColor: "rgb(123, 177, 222)",
	padding: "15px",
	color: "#fff"
};

const Navbar = ({ enlaces, h1Text, children }) => (
	<nav style={myStyles}>
		<h2>{h1Text}</h2>
		<ul>
			{ enlaces.map((enlace, i) => <li key={i} ><a href={enlace.url}>{enlace.name}</a></li>) }
		</ul>
		{children}
	</nav>
);

Navbar.propTypes = {
	h1Text: PropTypes.string.isRequired
}

Navbar.defaultProps = {
	h1Text: "Soy el valor por default"
}

export default Navbar;
