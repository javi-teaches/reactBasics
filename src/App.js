import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Test from './Test';
// import FrutasES6 from './FrutasES6';
// import Form from './Form/Form';
import Navbar from './Navbar';
import Counter from './Counter';


class App extends Component {
  render() {
    return (
		<div className="container">
			<Counter
				initialValue={1}
				txtAlert="Hola"
				increment={1} pdtos={['Papa', 'Arroz', 'Carne']}
				addPdto="Zapallo"
			/>
			<Counter
				initialValue={5}
				txtAlert="Chau"
				increment={5} pdtos={['Frutilla', 'Naranja', 'Sandía']}
				addPdto="Melón"
			/>
			<Counter
				initialValue={10}
				txtAlert="Buenasssss"
				increment={10} pdtos={['Mouse', 'Teclado', 'Pad']}
				addPdto="Teléfono"
			/>
			<Navbar
				h1Text="Saludos"
				enlaces={[
					{url: '/index',name: 'Home'},
					{url: '/about',name: 'About'},
					{url: '/products',name: 'Products'},
					{url: '/services',name: 'Services'},
				]}
			>
				<img src="http://placekitten.com/g/200/300" alt=""/>
				<h3>Hola</h3>
				<img src="http://placekitten.com/g/200/300" alt=""/>
				<h3>Chau</h3>
				<img src="http://placekitten.com/g/200/300" alt=""/>
				<h3>WWW</h3>
				<div className="container">
					<div className="row">
						<div className="col-md-6">Hola</div>
						<div className="col-md-6">Hola</div>
					</div>
				</div>
			</Navbar>

        	<h2>Hola mundo</h2>
		  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sunt, quas eum quia incidunt, debitis doloribus explicabo pariatur. Nam itaque tenetur assumenda delectus quae qui maxime quisquam? Earum, voluptatibus deleniti!</p>
			<Navbar
				h1Text="Footer"
				enlaces={[
					{url: '/contact',name: 'Contact'},
					{url: '/faq',name: 'F.A.Q'},
					{url: '/copyright',name: 'Copyright'},
				]}
			/>
		</div>
    );
  }
}

export default App;
