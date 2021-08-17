import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import logo from '@assets/images/logo.png';
import './Application.less';

type Props = {
  title: string;
  version: string;
};

const Application: React.FC<Props> = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <main>
        <div className='main-heading'>
          <h1>{props.title}</h1>
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
        <div className='versions center'>
          <span>
            ERWT <span>{props.version}</span>
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
        <p className='main-teaser small center'>
          Click &quot;Counter&quot; button(s) to update the app
          &quot;counter&quot; state. Components will update their states using
          Hot-Module-Replacement (HMR) without needing to refresh/reload whole
          application.
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
      </main>
    </React.Fragment>
  );
};

export default hot(module)(Application);
