import React from 'react';

type TagProps = { tagText: string };
const Tag = ({ tagText }: TagProps) => {
  return (
    <div className='tag-pill'>
      <span className='hashtag'># </span>
      <span className='tag-text'>{tagText}</span>
    </div>
  );
};

export default Tag;
