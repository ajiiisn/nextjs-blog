import React from 'react';
import { css } from '@emotion/core';
import BaseText from './BaseText';

type Props = {
  variant?: 'title' | 'subtitle';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactText;
};

const fontVariants = {
  title: `"Prompt", sans-serif`,
  subtitle: '"Raleway", sans-serif',
};

const Heading: React.FC<Props> = props => {
  const { variant = 'title', tag = 'h1', children } = props;
  return (
    <BaseText css={{ fontFamily: fontVariants[variant] }} tag={tag}>
      {children}
    </BaseText>
  );
};

export default Heading;
