import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

const trackingId = "G-GNS1WCWVGP"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

ReactGA.event({
    category: "Sign Up",
    action: "User pressed the big blue sign up button",
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
