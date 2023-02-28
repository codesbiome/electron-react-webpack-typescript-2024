import React from 'react';
import '../Application.scss';
import { icons } from '../Icons';
import { FilePath } from './FilePath';
import  Tag  from './Tag';
import AddTag from './AddTag';

const Header = () => {
  return (
    <div className='header'>
      <div className='main-heading'>
        <div className='logo'>
          <img src={icons.logo} id='logo' alt='מתברת'/>
        </div>
        <FilePath fileName='בדיקה' folderName='תיקייה' />
        <div className='tags'>
          <Tag tagText='חדוא' />
          <Tag tagText='עוד אחד' />
          <AddTag />
        </div>
      </div>
    </div>
  );
};

export default Header;
