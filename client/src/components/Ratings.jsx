import React from 'react';

//the rating section that is located under the title section of the component
const Ratings = (props) => {
  return (
    <div> 
      <table style={{cellpadding: '50', marginTop: '15px', marginBottom: '15px', marginRight: '700px', marginLeft: '300px'}}>
        <tbody>
          <tr>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>ratings: {props.restaurant.rating}</td>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>{props.restaurant.reviews} reviews</td>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>price range: {props.restaurant.priceRange}</td>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>cuisines: {props.restaurant.cuisines}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ratings;