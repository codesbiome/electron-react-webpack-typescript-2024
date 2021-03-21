import React from 'react';
import { hot } from 'react-hot-loader';

type Props = {
  title: string;
  version: string;
};

const Application: React.FC<Props> = (props) => {
  return (
    <div>
      This is an application we using {props.title} {props.version}
    </div>
  );
};

export default hot(module)(Application);
