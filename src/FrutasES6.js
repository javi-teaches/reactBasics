import React, { Component } from 'react';

var frutas = ['Manzana', 'Naranja', 'Pera', 'Limón', 'Banana'];

// var sumar = function (n1, n2) {
// 	return n1 + n2;
// }

// var sumar2 = (n1, n2) => n1 + n2;
// var sumar3 = n1 => n1 + 10;
// var sumar4 = () => 5 + 10;
// var sumar4 = () => {
// 	var num = 23;
// 	return num + 5 + 10
// };

class Frutas extends Component {
	render() {
		var myStyle = {
			color: 'red',
			backgroundColor: 'olive',
		}

		return (
			<React.Fragment>
				<h2>Listado de frutas</h2>
				<ul style={myStyle}>
					{
						frutas.filter(fruta => fruta !== 'Naranja' && fruta !== 'Limón').map(fruta => <li>{fruta}</li>)
					}
				</ul>
			</React.Fragment>
		);
	}
}

export default Frutas;