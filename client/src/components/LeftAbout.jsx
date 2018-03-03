import React from 'react';

//left column in the about section of the component
const LeftAbout = (props) => (
  <span>
    <p className="diningStyle" style={{fontWeight: 'bold', fontSize: '14px'}}>Dining Style</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.diningStyle}</p>
    <p className="cuisine" style={{fontWeight: 'bold', fontSize: '14px'}}>Cuisine</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.cuisines}</p>
    <p className="hoursOfOperations" style={{fontWeight: 'bold', fontSize: '14px'}}>Hours of Operation</p>
    <p className="monday" style={{fontSize: '14px'}}>Monday - Thursday</p>
    <p style={{fontSize: '14px'}}>Lunch: {props.restaurant.hoursOfOperations.monday.lunch}</p>
    <p style={{fontSize: '14px'}}>Dinner: {props.restaurant.hoursOfOperations.monday.dinner}</p>
    <p className="friday" style={{fontSize: '14px'}}>Friday</p>
    <p style={{fontSize: '14px'}}>Lunch: {props.restaurant.hoursOfOperations.friday.lunch}</p>
    <p style={{fontSize: '14px'}}>Dinner: {props.restaurant.hoursOfOperations.friday.dinner}</p>
    <p className="saturday" style={{fontSize: '14px'}}>Saturday</p>
    <p style={{fontSize: '14px'}}>Lunch: {props.restaurant.hoursOfOperations.saturday.lunch}</p>
    <p style={{fontSize: '14px'}}>Dinner:{props.restaurant.hoursOfOperations.saturday.dinner}</p>
    <p className="phone" style={{fontWeight: 'bold', fontSize: '14px'}}>Phone Number</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.phoneNumber}</p>
    <p className="website" style={{fontWeight: 'bold', fontSize: '14px'}}>Website</p>
    <p style={{fontSize: '14px'}}><a href={props.restaurant.website}>{props.restaurant.website}</a></p>
    <p className="payment" style={{fontWeight: 'bold', fontSize: '14px'}}>Payment</p>
    <p style={{fontSize: '14px'}}>AMEX, Visa, Discover, Master</p>
    <p className="dressCode" style={{fontWeight: 'bold', fontSize: '14px'}}>Dress Code</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.dressCode}</p>
    <p className="chef" style={{fontWeight: 'bold', fontSize: '14px'}}>Executive Chef</p>
    <p style={{fontSize: '14px'}}>{props.restaurant.executiveChef}</p>
  </span>
);

export default LeftAbout;