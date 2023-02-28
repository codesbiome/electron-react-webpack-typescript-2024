import React from 'react';

type SidebarButtonProps = { title: string; buttonType: string };
const SidebarButton = ({ buttonType, title }: SidebarButtonProps) => {
  return (
    <button
      title={title}
      className='sidebar-button'
      id={buttonType}
      onClick={(event) => {
        switch (event.currentTarget.id) {
          case 'files':
            document.querySelector('.right-sidebar').classList.toggle('open');
            break;

          case 'mathPanel':
            document.querySelector('.left-sidebar').classList.toggle('open');
            break;

          default:
            break;
        }
      }}
    ></button>
  );
};

class RightSidebar extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='right-sidebar'>
        <section id='top'>
          <SidebarButton title='חיפוש' buttonType='search' />
          <SidebarButton title='המחברות שלי' buttonType='files' />
        </section>
        <section id='bottom'>
          <SidebarButton title='זיכרון מתמטי' buttonType='mathPanel' />
          <SidebarButton title='הארכיון' buttonType='archive' />
          <SidebarButton title='העדפות' buttonType='settings' />
        </section>
      </div>
    );
  }
}

export default RightSidebar;
