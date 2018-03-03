import React from 'react';

//description section of the component
const Description = (props) => (
  <div style={{marginTop: '15px', marginBottom: '15px', marginRight: '700px', marginLeft: '300px', font: 'arial'}}>
    {props.restaurant.description}
  </div>
)

export default Description;