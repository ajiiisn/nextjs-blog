import React from 'react';

type Props = {
  tag: string;
  children: React.ReactText;
  className?: string;
};

const BaseText: React.FC<Props> = ({ tag, ...otherProps }) => {
  return React.createElement(tag, otherProps);
};

export default BaseText;
