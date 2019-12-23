import React from 'react';
import BaseText from './BaseText';

type Props = {
  tag?: 'p' | 'span';
  children: React.ReactText;
  className?: string;
};

const Text: React.FC<Props> = props => {
  const { tag = 'p', children, className } = props;
  return (
    <BaseText className={className} tag={tag}>
      {children}
    </BaseText>
  );
};

export default Text;
