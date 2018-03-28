import Info from './src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

const element = document.getElementById('info');
const initState = JSON.parse(element.getAttribute('data-info'))

ReactDOM.hydrate(<Info {...initState}/>, element);



