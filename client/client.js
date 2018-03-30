import Info from './src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

const element = document.getElementById('info');
const initState = JSON.parse(element.getAttribute('data-info'))

if(initState) {
  ReactDOM.hydrate(<Info {...initState}/>, element);
} else {
  const restaurantId = window.location.href.slice(window.location.href.search('r') + 2).replace('/', '');
  ReactDOM.render(<Info id={restaurantId}/>, element);
}





