import React, { useEffect, useState } from 'react';
import './Application.scss';

const ToolsPanel: React.FC = () => {
    const Tool: React.FC = () => {
        return (
            <div className='tool'>
            </div>
        );
    }

    return (
        <div className='tools-panel'>
            <Tool></Tool>
            <Tool></Tool>
            <Tool></Tool>
            <Tool></Tool>
            <Tool></Tool>
            <Tool></Tool>
            <Tool></Tool>
        </div>
    );
}

const Page: React.FC = () => {
    return (
        <div className='page'>
        <ToolsPanel/>
        </div>
      );
}

export default Page;