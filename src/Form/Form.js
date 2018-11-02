import React, { Component } from 'react';
import InputText from './InputText';
import Desplegable from './Desplegable';

class Form extends Component {
	render () {
		return (
			<React.Fragment>
				<InputText inputName="first" text="Nombre" helper="Escribí tu nombre" />
				<InputText inputName="first" helper="Escribí tu nombre" />
				<InputText inputName="last" text="Apellido" helper="Escribí tu apellido" />
				<InputText inputName="email" text="Email" helper="Escribí tu email" />
				<br/>
				<Desplegable />
				<br/>
			</React.Fragment>
		);
	}
}

export default Form;