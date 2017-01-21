import React, { Component } from 'react';
import Cookie from './cookie.js'

class CookieJar extends Component {
  render() {
    const CookieJarStyle = {
      'display' : 'flex',
      'justifyContent' : 'spaceBetween',
      'width' : '200px',
      'flexWrap' : 'wrap',
    }

    return(
      <div style={CookieJarStyle}>
        <Cookie name="Oreo" />
        <Cookie name="Oatmeal" />
        <Cookie name="Sugar" />
        <Cookie name="Chocolate" />
        <Cookie name="Newton" />
      </div>
    );
  }
}

export default CookieJar
