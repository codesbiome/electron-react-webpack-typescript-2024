import React from 'react';
import '../Application.scss';
import './LeftSidebar.scss'

type ActionsGroupProps = { title: string; groupType: string };
const ActionsGroup = ({ groupType, title }: ActionsGroupProps) => {
    return <div className='actions-group'>
        <h1 className='actions-group-title' id={groupType}>{title}</h1>
        <div className='actions-group-content'></div>
    </div>;
}

export default ActionsGroup;
