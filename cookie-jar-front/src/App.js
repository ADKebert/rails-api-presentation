import React, { Component } from 'react';
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
          <h2>The Cookie Jar</h2>
        </div>
        <div style={GalleryStyles}>
          <CookieJar />
        </div>
      </div>
    );
  }
}

export default App;
