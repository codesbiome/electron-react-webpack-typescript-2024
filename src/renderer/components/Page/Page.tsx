import React from 'react';
import './Page.scss';
import '../Application.scss';
import PageGrid from './Grid/Grid';
import ToolsPanel from './ToolsPanel';

const Page = () => {
  return (
    <div className='page'>
      <div className='page-grid'>
        <PageGrid />
        <ToolsPanel />
      </div>
    </div>
  );
};

export default Page;
