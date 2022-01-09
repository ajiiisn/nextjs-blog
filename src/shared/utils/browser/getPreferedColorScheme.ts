export type ColorScheme = 'dark' | 'light';

const getPreferedColorScheme = (): ColorScheme => {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export default getPreferedColorScheme;
