import React from 'react';
import './Application.scss';

type ToolProps = { title: string; buttonType: string };
const Tool = ({ buttonType, title }: ToolProps) => {
  return <button title={title} id={buttonType} className='tool'></button>;
};

const ToolsPanel = () => {
  return (
    <div className='tools-panel'>
      <Tool title='הוספת בלוק טקסט' buttonType='addTextBlock'></Tool>
      <Tool title='הוספת בלוק מתמטי' buttonType='addMathBlock'></Tool>
      <Tool title='הוספת בלוק גרפי' buttonType='addGraphBlock'></Tool>
      <Tool title='הוספת בלוק תמונה' buttonType='addPictureBlock'></Tool>
      <Tool title='הוספת קבוצה' buttonType='addGroupBlock'></Tool>
      <Tool title='הוספת קו מפריד' buttonType='addDividerBlock'></Tool>
      <Tool title='ניקוי הדף' buttonType='clearPage'></Tool>
    </div>
  );
};

const Page = () => {
  return (
    <div className='page'>
      <div className='page-grid'></div>
      <ToolsPanel />
    </div>
  );
};

export default Page;
