import React from 'react';

//title section of the component
const Title = (props) => {
  console.log('this props is being passed down from the parent', props);
  return (
  <div>{props.test}</div>
  )
};

export default Title;