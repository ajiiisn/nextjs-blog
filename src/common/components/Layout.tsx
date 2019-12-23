import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { color } from '../constants';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
            body {
            padding: 0;
            margin: 0;
            background-color: ${color.element.background};
            color: ${color.element.paragraph};
            min-height: 100%;
            font-family: 'Maitree', serif;
            font-size: 12pt;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Head>
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css?family=Maitree|Prompt|Raleway&display=swap" rel="stylesheet" />
      </Head>
      {children}
    </React.Fragment>
  );
};

export default Layout;
