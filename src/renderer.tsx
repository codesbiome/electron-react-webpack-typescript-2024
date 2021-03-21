import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import { inDev, say } from './utils/helpers';

// Lets say hello
say('Renderer execution started');

// Application to Render
const app = <Application title='ERWT Boilerpalte' version='3.0.0' />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
