import Info from './src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

const restaurantId = window.location.href.slice(window.location.href.search('r') + 2).replace('/', '');

axios.get(`http://localhost:1127/r/${restaurantId}/about`).then((response) => {
  ReactDOM.hydrate(<Info restaurantId={restaurantId} info={response.data}/>, document.getElementById('info'));
});



