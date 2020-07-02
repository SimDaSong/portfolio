import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './Main/Main';
import Career from "./Career/Career";
import Activities from "./Activities/Activities";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Main />
    <Career wait={5500} />
    <Activities wait={5500} />
    <Projects wait={5500} />
    <Contact wait={5500} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
