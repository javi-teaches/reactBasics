import React, { Component } from 'react';

class Counter extends Component {
	constructor(props){
		super(props);
		this.state ={
			conteo: this.props.initialValue,
			pdtos: this.props.pdtos ? this.props.pdtos : []
		}
	}

	contador = inc => {
		this.setState({
			conteo: this.state.conteo + inc,
		});
	}

	agregarPdto = pdto => {
		this.setState({
			pdtos: [...this.state.pdtos, pdto],
		})
	}

	deletePdto = oldPdto => () => {
		const { pdtos } = this.state;
		const newPdtos = pdtos.filter((pdto, n) => n !== oldPdto);
		this.setState({
			pdtos: [...newPdtos],
		})
	}

	alertar = (txt) => {
		window.alert(txt);
	}

	render(){
		console.log(this.state);
		console.log(this.props);
		return(
			<React.Fragment>
				<h3>{this.state.conteo}</h3>
				<button className="btn btn-warning" onClick={() => this.contador(this.props.increment)}>Incrementar</button>
				<button className="btn btn-danger" onClick={() => this.alertar(this.props.txtAlert)}>Alertar</button>
				<button className="btn btn-success" onClick={() => this.agregarPdto(this.props.addPdto)}>Agregar</button>
				<ul>
					{this.state.pdtos.map((pdto, i) => <li key={i} onClick={this.deletePdto(i)}>{`${pdto} - ${i}`}</li>)}
				</ul>
			</React.Fragment>
		);
	}
}

export default Counter;
