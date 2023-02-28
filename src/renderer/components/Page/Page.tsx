import React from 'react';
import './Page.scss';
import ToolsPanel from './ToolsPanel';

const Page = () => {
  return (
    <div className='page'>
      <div className='page-grid'>
        <ToolsPanel />
      </div>
    </div>
  );
};

export default Page;
