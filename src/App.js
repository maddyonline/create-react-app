import React, { Component } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  createSession = async () => {
    console.log('clicked')
    const response = await axios.post(
      'https://socket-sync.onrender.com/api/sessions',
      { action: 'new'},
      { headers: { 
        'Content-Type': 'application/json',
      } }
    )
    console.log(response.data)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Running: {process.env.NODE_ENV}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.createSession}>Create</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
