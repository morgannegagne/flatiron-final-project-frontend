/*global chrome*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    res: ''
  }

  getCurrentTab = (callback) => {
    debugger
      chrome.tabs.query({
          active: true,
          currentWindow: true
      },
      (tabs) => {
          console.log(tabs[0]);
      });
  }

  componentDidMount(){
    this.getCurrentTab((tab) => chrome.runtime.sendMessage({type: 'popupInit', tab: tab},
    res => this.setState({ res }))
    )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          You are on url {this.state.res}
        </div>

      </div>
    );
  }
}

export default App;
