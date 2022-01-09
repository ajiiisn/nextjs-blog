import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { ColorScheme, getPreferedColorScheme } from '../utils/browser';

const ThemeStateContext = createContext<ColorScheme>('light');

const ThemeDispatchContext = createContext<Dispatch<SetStateAction<ColorScheme>>>(() => {
  // no-op
});

type Props = {
  children: ReactNode;
};

export const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useState<ColorScheme>('light');

  const setDocumentClass = (newTheme: ColorScheme) => {
    if (typeof window !== undefined) {
      if (newTheme === 'dark') {
        window.document.querySelector('html').classList.add('dark');
      } else {
        window.document.querySelector('html').classList.remove('dark');
      }
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const preferedColorScheme = getPreferedColorScheme();
      setTheme(preferedColorScheme);
      setDocumentClass(preferedColorScheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      setDocumentClass(theme);
    }
  }, [theme]);

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>{props.children}</ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export const useThemeState = () => {
  return useContext(ThemeStateContext);
};

export const useThemeDispatch = () => {
  return useContext(ThemeDispatchContext);
};

export const useTheme = (): [ColorScheme, Dispatch<SetStateAction<ColorScheme>>] => {
  return [useContext(ThemeStateContext), useContext(ThemeDispatchContext)];
};
