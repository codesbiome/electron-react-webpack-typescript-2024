import React, { useEffect, useState } from 'react';
import './Application.scss';



const FilePath: React.FC<{fileName: string, folderName: string}> = ({fileName, folderName}) => {
    return (
        <div className='filepath'>
            <span className='filepath-folder'>{folderName}</span>
            <span className='filepath-seperator'> / </span>
            <span className='filepath-name'>{fileName}</span>
        </div>
      );
}

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className='main-heading'>
                <div className='logo'></div>
                <FilePath fileName="בדיקה" folderName="תיקייה"></FilePath>
                <div className='tags'></div>
            </div>
        </div>
      );
}

export default Header;