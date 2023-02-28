import React, { useEffect, useState } from 'react';
import './Application.scss';

const ToolsPanel: React.FC = () => {
    const Tool: React.FC<{title: string, buttonType: string}> = ({buttonType, title}) => {
        return (
            <button title={title} id={buttonType} className='tool'></button>
        );
    }

    return (
        <div className='tools-panel'>
            <Tool title="הוספת בלוק טקסט" buttonType="addTextBlock"></Tool>
            <Tool title="הוספת בלוק מתמטי" buttonType="addMathBlock"></Tool>
            <Tool title="הוספת בלוק גרפי" buttonType="addGraphBlock"></Tool>
            <Tool title="הוספת בלוק תמונה" buttonType="addPictureBlock"></Tool>
            <Tool title="הוספת קבוצה" buttonType="addGroupBlock"></Tool>
            <Tool title="הוספת קו מפריד" buttonType="addDividerBlock"></Tool>
            <Tool title="ניקוי הדף" buttonType="clearPage"></Tool>
        </div>
    );
}

const Page: React.FC = () => {
    return (
        <div className='page'>
            <div className="page-grid">

            </div>
            <ToolsPanel/>
        </div>
      );
}

export default Page;