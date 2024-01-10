import React, { useEffect, useState } from 'react';
import '@styles/app.scss';
import icons from '@components/icons';

const Application: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);
  const [versions, setVersions] = useState<Record<string, string>>({});

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }

    // Apply verisons
    const app = document.getElementById('app');
    const versions = JSON.parse(app.getAttribute('data-versions'));
    setVersions(versions);
  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div id='erwt'>
      <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>ERWT - Electron Boilerplate</h1>
        </div>
        <div className='main-teaser'>
          Desktop Application with Electron, React, Webpack & TypeScript
        </div>
        <div className='versions'>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.electron} /> Electron
            </div>
            <span>{versions?.electron}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.erwt} /> ERWT
            </div>
            <span>{versions?.erwt}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.typescript} /> Typescript
            </div>
            <span>{versions?.typescript}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.nodejs} /> Nodejs
            </div>
            <span>{versions?.node}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.react} /> React
            </div>
            <span>{versions?.react}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.webpack} /> Webpack
            </div>
            <span>{versions?.webpack}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.chrome} /> Chrome
            </div>
            <span>{versions?.chrome}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.license} /> License
            </div>
            <span>{versions?.license}</span>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='center'>
          <button
            onClick={() => {
              if (counter > 99) return alert('Going too high!!');
              setCounter(counter + 1);
            }}
          >
            Increment {counter != 0 ? counter : ''} <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button
            onClick={() => {
              if (counter == 0) return alert('Oops.. thats not possible!');
              setCounter(counter > 0 ? counter - 1 : 0);
            }}
          >
            Decrement <span>{counter}</span>
          </button>
          &nbsp;&nbsp; &nbsp;&nbsp;
          <button onClick={toggleTheme}>
            {darkTheme ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
