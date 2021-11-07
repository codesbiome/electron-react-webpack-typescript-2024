import { inDev } from '@common/helpers';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <Application title='ERWT Boilerplate' version='4.0.0' />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
