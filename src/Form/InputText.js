import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
	render(){
		return(
			<React.Fragment>
				<label htmlFor={this.props.inputName}>{this.props.text}: </label>
				<input type="text" id={this.props.inputName} placeholder={this.props.helper} name={this.props.inputName} />
				<br />
			</React.Fragment>
		);
	}
}

InputText.propTypes = {
	text: PropTypes.string.isRequired,
};

InputText.defaultProps = {
	text: 'Saludosss',
};


export default InputText;