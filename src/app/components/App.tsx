import logo from '@static/logo.png';
import React from 'react';
import { hot } from 'react-hot-loader';

interface AppProps {
  title?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0 };

  render(): JSX.Element {
    return (
      <div className='container'>
        <h2 className='heading'>
          <img src={logo} width='32' title='Codesbiome' /> &nbsp; Electron React
          Webpack Typescript (v2.0.0)
        </h2>
        <p className='teaser'>
          Minimal boilerplate for writing Desktop Applications using Electron,
          React, Webpack & TypeScript. This project makes use of latest packages
          like electron, react, typescript & webpack to serve the best
          environment for development.
        </p>
        <p>
          Click below button to update the state (counter) using 🔥
          react-hot-loader (HMR).
          <br />
          <i>
            Component will not lose their state when modifying their source
            code.
          </i>
        </p>
        <button
          onClick={(): void =>
            this.setState({ counter: this.state.counter + 1 })
          }
        >
          Counter &nbsp; <span>{this.state.counter}</span>
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
