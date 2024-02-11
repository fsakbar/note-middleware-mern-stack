import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

// make base url for easy to fetch api url
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);


