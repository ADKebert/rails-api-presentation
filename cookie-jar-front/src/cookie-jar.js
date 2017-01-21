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

    const CookieList = [
      "Oreo",
      "Oatmeal",
      "Sugar",
      "Chocolate",
    ];

    var theCookies = CookieList.map(function(cookie) {
      return <Cookie name={cookie} />;
    });

    return(
      <div style={CookieJarStyle}>
        {theCookies}
      </div>
    );
  }
}

export default CookieJar
