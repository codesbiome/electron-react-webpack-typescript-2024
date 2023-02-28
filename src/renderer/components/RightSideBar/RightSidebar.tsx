import { icons } from '@components/Icons';
import React from 'react';
import './RightSideBar.scss';
import SidebarButton from './SidebarButton';

class RightSidebar extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='right-sidebar'>
        <section id='top'>
          <SidebarButton title='חיפוש' buttonType='search' icon={icons.search}/>
          <SidebarButton title='המחברות שלי' buttonType='files' icon={icons.notebook}/>
        </section>
        <section id='bottom'>
          <SidebarButton title='זיכרון מתמטי' buttonType='mathPanel' icon={icons.mathPanel} />
          <SidebarButton title='הארכיון' buttonType='archive' icon={icons.archive} />
          <SidebarButton title='העדפות' buttonType='settings' icon={icons.settings} />
        </section>
      </div>
    );
  }
}

export default RightSidebar;
