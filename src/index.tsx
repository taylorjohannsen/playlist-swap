import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App meow={"bloop"}/>
  </React.StrictMode>,
  document.getElementById('root')
);
