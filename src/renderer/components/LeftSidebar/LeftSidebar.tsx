import React from 'react';
import ActionsGroup from './ActionsGroup';

const LeftSidebar = () => {
  return <div className='left-sidebar'>
    <ActionsGroup title='הצבות' groupType='definitions'/>
    <ActionsGroup title='פונקציות' groupType='functions'/>
  </div>;
};

export default LeftSidebar;
