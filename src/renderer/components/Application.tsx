import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import logo from '@assets/images/logo.png';
import './Application.less';

const Application: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div id='erwt'>
      <div className='header'>
        <div className='main-heading'>
          <h1>ERWT Boilerplate</h1>
        </div>
        <div className='main-teaser'>
          <img src={logo} title='Codesbiome' />
          <div>
            Minimal boilerplate for rapid development of Desktop Applications.
            <br />
            This project makes use of Electron, React, Typescript, Webpack to
            serve the best environment for development with hot-reloading of
            modules and styles.
          </div>
        </div>
        <div className='versions'>
          <span>
            ERWT <span id='erwt-version'></span>
          </span>
          <span>
            Electron <span id='electron-version'></span>
          </span>
          <span>
            Chrome <span id='chrome-version'></span>
          </span>
          <span>
            Node <span id='node-version'></span>
          </span>
        </div>
      </div>

      <div className='footer'>
        <p className='main-teaser small center'>
          Click below button(s) to update the application &quot;counter&quot;
          state. For faster development experience, this application will update
          using Hot Reload without needing to restart/reload after code changes
        </p>
        <div className='center'>
          <button onClick={() => setCounter(counter + 1)}>
            Increment Counter <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
            Decrement Counter <span>{counter}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default hot(module)(Application);
