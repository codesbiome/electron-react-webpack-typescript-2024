import React from 'react';
import ReactDOM from 'react-dom';
import { inDev } from '@common/helpers';
import WindowFrame from '@misc/window/components/WindowFrame';
import Application from './components/Application';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <WindowFrame title='ERWT Boilerplate' borderColor='#c7c7c70d' arch='windows'>
    <Application />
  </WindowFrame>
);

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
