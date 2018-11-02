import React, { Component } from 'react';

class Counter extends Component {
	constructor(props){
		super(props);
		this.state ={
			conteo: this.props.initialValue,
			pdtos: []
		}
	}

	contador = () => {
		this.setState({
			conteo: this.state.conteo + 1,
		});
	}

	agregarPdto = (pdto) => {
		this.setState({
			pdtos: this.state.pdtos.push(pdto)
		})
	}

	alertar = (txt) => {
		window.alert(txt);
	}

	render(){
		return(
			<React.Fragment>
				<h3>{this.state.conteo}</h3>
				<button className="btn btn-warning" onClick={this.contador}>Incrementar</button>
				<button className="btn btn-danger" onClick={this.alertar}>Alertar</button>
			</React.Fragment>
		);
	}
}

export default Counter;
