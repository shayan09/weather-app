import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //grabs root from index.html
//The 2 arguments are name of the Component and location of the div

serviceWorker.unregister();
