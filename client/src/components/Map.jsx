import React from 'react';
import Iframe from 'react-iframe';
//map section of the component that is located above the right column section 
const Maps = (props) => {
  return (
    <span>
      <iframe src={props.restaurant.map}></iframe>
    </span>
  )
};

export default Maps;
