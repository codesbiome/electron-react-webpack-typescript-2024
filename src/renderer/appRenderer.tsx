import React from 'react';
import ReactDOM from 'react-dom';
import WindowFrame from '@misc/window/components/WindowFrame';
import Application from './components/Application';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <WindowFrame title='ERWT Boilerplate' platform='windows'>
    <Application />
  </WindowFrame>
);

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

