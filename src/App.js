import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import FrutasES6 from './FrutasES6';
import Form from './Form/Form';


class App extends Component {
  render() {
    return (
      <div>
        <FrutasES6 />
        <Form />
        <Test />
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, fugiat quas officia accusantium inventore recusandae ab, cum eos, asperiores vero voluptatem? Eaque temporibus nostrum eos excepturi iure obcaecati? Quasi, aut?</p>
      </div>
    );
  }
}

export default App;
