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
          <img src={logo} width='32' title='Codesbiome' />
          <h1>{props.title}</h1>
        </div>
        <p className='main-teaser'>
          Custom boilerplate for rapid development of Desktop Applications.
          <br />
          This project makes use of Electron, React, Typescript, Webpack to
          serve the best environment for development with hot-reloading of
          modules.
        </p>
        <div className='versions'>
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
        <p className='main-teaser small'>
          Click below button to update the application &quot;counter&quot;
          state. Components will update their states using
          Hot-Module-Replacement technique, without needing to refersh/reload
          application.
        </p>
        <button onClick={() => setCounter(counter + 1)}>
          Counter <span>{counter}</span>
        </button>
      </main>
    </React.Fragment>
  );
};

export default hot(module)(Application);
