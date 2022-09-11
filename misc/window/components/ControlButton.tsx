import classNames from 'classnames';
import React from 'react';

interface IControlButtonProps {
  readonly name: string;
  readonly path: string;
  readonly title: string;
}

const ControlButton: React.FC<
  IControlButtonProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { name, path, title, ...rest } = props;
  const { onClick } = rest;

  const className = classNames('control', name);

  return (
    <div
      aria-label={name}
      className={className}
      onClick={onClick}
      title={title}
      {...rest}
    >
      <svg aria-hidden='true' version='1.1' width='10' height='10'>
        <path fill='currentColor' d={path} />
      </svg>
    </div>
  );
};

export default ControlButton;
