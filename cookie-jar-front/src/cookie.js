import React from 'react';

const Cookie = ({name}) => {
  const CookieStyles = {
    'color' : 'white',
    'backgroundColor' : '#bb793d',
    'height' : '70px',
    'width' : '70px',
    'borderRadius' : '50%',
    'padding' : '10px',
    'margin' : '5px',
  }
  return(
    <div style={CookieStyles}>
      <p>{`${name}`}</p>
    </div>
  );
};

export default Cookie;
