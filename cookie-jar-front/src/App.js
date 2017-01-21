import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CookieJar from './cookie-jar.js'

class App extends Component {
  render() {
    const GalleryStyles = {
      'display' : 'flex',
      'justifyContent' : 'center',
      'alignItems' : 'center',
      'flexDirection' : 'column',
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div style={GalleryStyles}>
          <p className="App-intro">
            Awesome cookie jar goes here
          </p>
          <CookieJar />
        </div>
      </div>
    );
  }
}

export default App;
