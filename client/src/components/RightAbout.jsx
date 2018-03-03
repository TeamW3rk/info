import React from 'react';
import Maps from './Map.jsx';

//right column in the about section of the component
const RightAbout = (props) => (
  <span>
    <p style={{fontSize: '14px'}}><a href={props.restaurant.neighborhood}>{props.restaurant.neighborhood}</a></p>
    <p className="neighborhood" style={{fontWeight: 'bold', fontSize: '14px'}}>Neighborhood</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.neighborhood}</p>
    <p className="crossStreet" style={{fontWeight: 'bold', fontSize: '14px'}}>Cross Street</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.crossStreet}</p>
    <p className="parking" style={{fontWeight: 'bold', fontSize: '14px'}}>Parking</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.parking}</p>
    <p className="additional" style={{fontWeight: 'bold', fontSize: '14px'}}>Additional</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.additional.description}</p>
  </span>
);

export default RightAbout;

{/* <Maps item={props}/> */}