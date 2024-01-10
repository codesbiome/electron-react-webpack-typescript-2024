/**
 * Copyright (c) 2021, Guasam
 *
 * This software is provided "as-is", without any express or implied warranty. In no event
 * will the authors be held liable for any damages arising from the use of this software.
 * Read the LICENSE file for more details.
 *
 * @author  : guasam
 * @project : Electron Window
 * @package : Window Titlebar (Component)
 */

import React, { createRef, useContext, useEffect, useRef, useState } from 'react';
import titlebarMenus from '@main/window/titlebarMenus';
import classNames from 'classnames';
import WindowControls from './WindowControls';
import context from '@main/window/titlebarContextApi';
import { WindowContext } from './WindowFrame';
import './titlebar.scss';

type Props = {
  title: string;
  mode: 'centered-title';
  icon?: string;
};

const Titlebar: React.FC<Props> = (props) => {
  const activeMenuIndex = useRef<number | null>(null);
  const menusRef = titlebarMenus.map(() => createRef<HTMLDivElement>());
  const [menusVisible, setMenusVisible] = useState(true);
  const windowContext = useContext(WindowContext);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return; // Prevent repeatation of toggle when key holding
      if (e.altKey) {
        // Hiding menus? close active menu popup
        if (menusVisible) {
          closeActiveMenu();
        }
        setMenusVisible(!menusVisible);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menusVisible, menusRef]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeMenuIndex.current != null) {
        if (
          menusRef[activeMenuIndex.current].current &&
          !menusRef[activeMenuIndex.current].current?.contains(event.target as Node)
        ) {
          // console.log('You clicked outside of me!');
          closeActiveMenu();
        }
      }
    }

    if (activeMenuIndex != null) {
      document.addEventListener('mousedown', handleClickOutside);
      // console.log('added event');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // console.log('remove event');
    };
  }, [activeMenuIndex, menusRef]);

  function showMenu(index: number, e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    e.preventDefault();

    if (menusRef[index].current?.classList.contains('active')) {
      // close..
      closeActiveMenu();
    } else {
      // open..
      menusRef[index].current?.classList.add('active');
      activeMenuIndex.current = index;
      menusRef[index].current?.parentElement?.classList.add('active');
    }
  }

  function onMenuHover(index: number) {
    if (activeMenuIndex.current != null) {
      menusRef[activeMenuIndex.current].current?.classList.toggle('active');
      menusRef[index].current?.classList.toggle('active');
      menusRef[index].current?.parentElement?.classList.toggle('active');
      menusRef[activeMenuIndex.current].current?.parentElement?.classList.toggle(
        'active',
      );

      activeMenuIndex.current = index;
    }
  }

  function closeActiveMenu() {
    if (activeMenuIndex.current != null) {
      menusRef[activeMenuIndex.current].current?.classList.remove('active');
      menusRef[activeMenuIndex.current]?.current?.parentElement?.classList.remove('active');
      activeMenuIndex.current = null;
    }
  }

  function handleAction(action?: string, value?: string | number) {
    closeActiveMenu();
    const c: Record<string, CallableFunction> = context;
    if (action) {
      if (typeof c[action] === 'function') {
        c[action](value);
      } else {
        console.log(`action [${action}] is not available in titlebar context`);
      }
    }
  }

  return (
    <div className='window-titlebar'>
      {props.icon ? (
        <section className='window-titlebar-icon'>
          <img src={props.icon} alt='titlebar icon' />
        </section>
      ) : (
        ''
      )}

      <section
        className={classNames('window-titlebar-content', {
          centered: props.mode === 'centered-title',
        })}
      >
        {menusVisible ? '' : <div className='window-title'>{props.title}</div>}
      </section>

      <section
        className={classNames('window-titlebar-menu', {
          hidden: !menusVisible,
        })}
      >
        {titlebarMenus.map((item, menuIndex) => {
          return (
            <div className='menu-item' key={`menu_${menuIndex}`}>
              <div
                className='menu-title'
                onClick={(e) => showMenu(menuIndex, e)}
                onMouseEnter={() => onMenuHover(menuIndex)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {item.name}
              </div>
              <div className='menu-popup' ref={menusRef[menuIndex]}>
                {item.items?.map((menuItem, menuItemIndex) => {
                  if (menuItem.name === '__') {
                    return (
                      <div
                        key={`menu_${menuIndex}_popup_item_${menuItemIndex}`}
                        className='popup-item-separator'
                      ></div>
                    );
                  }

                  return (
                    <div
                      key={`menu_${menuIndex}_popup_item_${menuItemIndex}`}
                      className='menu-popup-item'
                      onClick={() =>
                        handleAction(menuItem.action, menuItem.value)
                      }
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <div className='popup-item-name'>{menuItem.name}</div>
                      <div className='popup-item-shortcut'>
                        {menuItem.shortcut}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <WindowControls platform={windowContext.platform} tooltips={true} />
    </div>
  );
};

export default Titlebar;
