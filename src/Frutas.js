import React, { Component } from 'react';

var frutas = ['Manzana', 'Naranja', 'Pera', 'Limón', 'Banana'];

class Frutas extends Component {
	render() {
		return (
			<React.Fragment>
				<h2>Listado de frutas</h2>
				<ul>
					{
						frutas.filter(function (fruta) {
							return fruta !== 'Naranja' && fruta !== 'Limón';
						}).map(function(fruta){
							return <li>{fruta}</li>
						})
					}
				</ul>
			</React.Fragment>
		);
	}
}

export default Frutas;