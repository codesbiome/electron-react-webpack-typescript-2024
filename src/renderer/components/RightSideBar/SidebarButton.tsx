import React from 'react';
import '../Application.scss';

type SidebarButtonProps = { title: string; buttonType: string, icon?:string };

const SidebarButton = ({ buttonType, title,icon }: SidebarButtonProps) => {
  return (
    <div>
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
    >
      <img src={icon} alt={title}/>
    </button>
    </div>
  );
};

export default SidebarButton;
