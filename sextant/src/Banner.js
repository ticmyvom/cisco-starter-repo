import React from 'react';
import './Banner.css'; // Import the CSS file

function Banner(props) {
  return (
    <div className="banner">
      <h1>{props.siteTitle}</h1>
    </div>
  );
}

export default Banner;