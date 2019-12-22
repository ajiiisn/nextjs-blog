import React from 'react';
import BaseText from './BaseText';

type Props = {
  tag?: 'p' | 'span';
  children: React.ReactText;
};

const Text: React.FC<Props> = props => {
  const { tag = 'p', children } = props;
  return <BaseText tag={tag}>{children}</BaseText>;
};

export default Text;
