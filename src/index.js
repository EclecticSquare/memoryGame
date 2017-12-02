import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MemoryCard from './MemoryCard.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

