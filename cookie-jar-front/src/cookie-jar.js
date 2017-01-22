import React, { Component } from 'react';
import Cookie from './cookie.js'

class CookieJar extends Component {
  constructor () {
      super()
      this.state = {
        cookieList: [],
      }
  };

  componentWillMount() {
    // With AJAX
    // fetch('http://localhost:3001/cookies.json', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // }).then(res => res.json())
    //   .then(data => this.setState({
    //                   cookieList: data
    //                 })
    //   );

      // Default values
    this.setState({
      cookieList: [
        {key:1, value:"Oreo"},
        {key:2, value:"Oatmeal"},
        {key:3, value:"Sugar"},
        {key:4, value:"Chocolate"},
      ]
    });
  }

  render() {
    const CookieJarStyle = {
      'display' : 'flex',
      'justifyContent' : 'spaceBetween',
      'width' : '200px',
      'flexWrap' : 'wrap',
    };

    var theCookies = this.state.cookieList.map(function(cookie) {
      return <Cookie key={cookie.key} name={cookie.value} />;
    });

    return(
      <div style={CookieJarStyle}>
        {theCookies}
      </div>
    );
  }
}

export default CookieJar
